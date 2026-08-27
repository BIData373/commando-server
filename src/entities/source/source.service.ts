import { BadRequestException, Injectable } from '@nestjs/common';
import { countBy, flatMap, intersection, map, uniq } from 'lodash';
import { chatUrl, discussionNotificationTemplate, vectorUrl } from '../../common/consts/env';
import { decodeMulterFilename } from '../../common/functions/string';
import { renderTemplate } from '../../common/functions/template';
import { PrismaService } from '../../common/prisma.service';
import { SocketGateway } from '../../socket/socket.gateway';
import { SocketEventType } from '../../socket/types/socket-event-type.enum';
import { TaskRunnerService } from '../../task-runner/task-runner.service';
import { DeadlineType, ExtractionStatus, Prisma, Source, TaskCreationType, User, Workspace } from '../../types/prisma';
import { S3Service } from '../s3/s3.service';
import { MessageRelayService } from '../services/message-relay.service';
import { tagsConnectOrCreateArgs, tagsSetOrCreateArgs } from '../tag/functions/tag-args';
import { taskAssigneeStatusesCreateArgs } from '../task/functions/task-args';
import { TaskService } from '../task/task.service';
import { CreateSourceDto } from './dto/request/create-source.dto';
import { GetAIExtractionCallbackDto } from './dto/request/get-ai-extraction-callback.dto';
import { UpdateSourceDto } from './dto/request/update-source.dto';
import { SourceDto } from './dto/response/source.dto';

@Injectable()
export class SourceService {
  static readonly include: Prisma.SourceInclude = {
    tags: true
  }
  constructor(
    private readonly prisma: PrismaService,
    private readonly s3: S3Service,
    private readonly taskRunner: TaskRunnerService,
    private readonly socket: SocketGateway,
    private readonly taskService: TaskService,
    private readonly messageRelayService: MessageRelayService,
  ) { }

    async sendTaskCreatedNotifications(
           { title: workspaceTitle, chatNotification, mailNotification }: Workspace,
      sourceName: string,
      recipients: string[],
      count: number,
      date?: Date
    ) {
      const title = `קיבלת הנחיות חדשות מאת: ${workspaceTitle}`
      const tasksUrl = `${vectorUrl}/personal/tasks`
      const source = `מתוך דיון: ${sourceName} ${date?.toLocaleDateString() ?? ''}`

      if (chatNotification) {
        const chatMessage = `${source}, נוצרו ${count} הנחיות באחריותך\n
         לצפייה בהנחיות: ${tasksUrl}`
        await this.messageRelayService.sendNotification(
          recipients,
          'chat',
          title,
          chatMessage
        )
      }
      if (mailNotification) {
        const html = renderTemplate(discussionNotificationTemplate!, {
          workspaceName: workspaceTitle,
          source,
          count,
          tasksUrl,
          vectorUrl: vectorUrl,
          chatUrl: chatUrl,
        })
        await this.messageRelayService.sendNotification(
          recipients,
          'mail',
          title,
          html
        )
      }
    }

  async create(
    { tags, tasks, workspaceId, context, aiExtraction, draft, ...dto }: CreateSourceDto,
    userId: number,
    file?: Express.Multer.File
  ) {
    const attachmentKey = file && await this.s3.upload(file, 'sources')
    const attachmentName = file ? decodeMulterFilename(file.originalname) : undefined

    let notStartedStatusId: number | undefined

    if (tasks?.length) {
      const [notStartedStatus] = await this.taskService.findDefaultStatusInWorkspaces(workspaceId)
      notStartedStatusId = notStartedStatus.id
    }

    const source = await this.prisma.source.create({
      data: {
        ...dto,
        workspaceId,
        attachmentKey,
        attachmentName,
        draft: aiExtraction || draft,
        extractionStatus: aiExtraction ? ExtractionStatus.PENDING : undefined,
        ...(tags !== undefined && ({
          tags: tagsConnectOrCreateArgs(tags, workspaceId, userId)
        })),
        ...(tasks !== undefined && ({
          tasks: {
            create: tasks.map(({ assignees, tags: taskTags, ...taskDto }) => ({
              ...taskDto,
              workspaceId,
              statusId: notStartedStatusId!,
              creationType: TaskCreationType.HUMAN,
              createdBy: userId,
              updatedBy: userId,
              ...(assignees?.length && {
                assigneeStatuses: taskAssigneeStatusesCreateArgs(assignees, notStartedStatusId!)
              }),
              ...(taskTags?.length && {
                tags: tagsConnectOrCreateArgs(taskTags, workspaceId, userId)
              })
            }))
          }
        })),
        createdBy: userId,
        updatedBy: userId
      },
      include: SourceService.include
    });

    if (aiExtraction) {
      this.taskRunner.sendTask('vector.process_document', [source.id])
    }

    this.sendNotificationsForNewTasks((tasks ?? []).map(t => map(t.assignees ?? [], 'id')), workspaceId, dto.name, dto.date)
      .catch(e => console.error('Failed to send task created notifications:', e));

    return source
  }

  // Counts unique tasks per user (a user linked to multiple assignees on the same task counts as 1)
  // and sends a single notification to each user with their total count.
  private async sendNotificationsForNewTasks(
    taskAssigneeIds: number[][],
    workspaceId: number,
    sourceName: string,
    date?: Date
  ) {
    // Collect all unique assignee IDs across all tasks
    const assigneeIds = uniq(flatMap(taskAssigneeIds));
    if (!assigneeIds.length) return;

    // Fetch workspace notification settings and assignee-to-user mappings in parallel
    const [workspace, assigneesWithUsers] = await this.prisma.$transaction([
      this.prisma.workspace.findUniqueOrThrow({
        where: { id: workspaceId },
      }),
      this.prisma.assignee.findMany({
        where: { id: { in: assigneeIds } },
        select: { id: true, users: { select: { upn: true } } }
      })
    ]);

    // Map each assignee ID to its linked user UPNs
    const upnsByAssigneeId = new Map(
      assigneesWithUsers.map(a => [a.id, a.users.map(u => u.upn)])
    );

    // Count unique tasks per user — uniq ensures a user with multiple assignees on the same task counts once
    const tasksPerUser = countBy(
      flatMap(taskAssigneeIds, assignees =>
        uniq(flatMap(assignees, id => upnsByAssigneeId.get(id) ?? []))
      )
    );

    // Send all notifications in parallel — one per user
    await Promise.all(
      Object.entries(tasksPerUser).map(([upn, count]) =>
        this.sendTaskCreatedNotifications(workspace, sourceName, [upn], count, date)
      )
    );
  }

  async findInWorkspace(workspaceId: number): Promise<Prisma.SourceGetPayload<{ include: typeof SourceService.include }>[]> {
    return await this.prisma.source.findMany({
      where: { workspaceId, deletedAt: null, draft: false },
      include: SourceService.include
    });
  }

  async findOne(id: number, user: User) {
    const source = await this.prisma.source.findUnique({
      where: { id, deletedAt: null },
      include: SourceService.include
    });

    if (!source) {
      return null;
    }

    const workspace = await this.prisma.workspace.findUniqueOrThrow({
      where: { id: source.workspaceId },
      include: { permissions: { where: { userId: user.id } } }
    })

    const tasks = await this.taskService.findFormattedBySource(source.id, workspace, user)

    return { ...source, tasks };
  }

  async findOneAndEmit(id: number, user: User, urlName: string) {
    const result = await this.findOne(id, user)
    this.socket.emitToUrlName(urlName, SocketEventType.TASK_EXTRACTION_FINISHED, result)
    return result
  }

  async update(
    { id, workspaceId, ...source }: Source,
    // TODO - fix
    { tags, tasks, context, deleteAttachment, workspaceId: _, aiExtraction, draft, ...dto }: UpdateSourceDto,
    updatedBy: number,
    file?: Express.Multer.File
  ) {
    let attachmentKey: string | null | undefined;
    let attachmentName: string | null | undefined;

    if (file) {
      if (source?.attachmentKey) {
        await this.s3.delete(source.attachmentKey);
      }

      attachmentKey = await this.s3.upload(file, 'sources');
      attachmentName = decodeMulterFilename(file.originalname);
    } else if (deleteAttachment && source?.attachmentKey) {
      await this.s3.delete(source.attachmentKey);
      attachmentKey = null;
      attachmentName = null;
    }

    if (aiExtraction) {
      this.taskRunner.sendTask('vector.process_document', [id])
    }

    return await this.prisma.source.update({
      where: { id },
      data: {
        ...dto,
        attachmentKey,
        attachmentName,
        updatedBy,
        draft: aiExtraction || draft,
        ...(tags !== undefined && {
          tags: tagsSetOrCreateArgs(tags, workspaceId, updatedBy)
        })
      },
      include: SourceService.include
    });
  }

  async extract(source: Source): Promise<SourceDto> {
    if (source.extractionStatus === ExtractionStatus.PENDING) {
      throw new BadRequestException('Source extraction is already pending!')
    }

    const updatedSource = await this.prisma.source.update({
      where: { id: source.id },
      data: {
        extractionStatus: ExtractionStatus.PENDING,
        draft: true
      },
      include: SourceService.include
    })
    this.taskRunner.sendTask('vector.process_document', [source.id])
    return updatedSource
  }

  async remove(id: number, deletedBy: number) {
    return await this.prisma.source.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
      include: SourceService.include
    });
  }

  async processAiResult(source: Source, dto: GetAIExtractionCallbackDto) {
    const workspace = await this.prisma.workspace.findUniqueOrThrow({
      where: { id: source.workspaceId },
      include: { permissions: { where: { userId: source.createdBy } } }
    })
    const user = await this.prisma.user.findUniqueOrThrow({ where: { id: source.createdBy } })

    if (dto.error) {
      await this.prisma.source.update({
        where: { id: source.id },
        data: { extractionStatus: dto.error }
      })
      return await this.findOneAndEmit(source.id, user, workspace.urlName)
    }

    const assigneeIds = uniq(flatMap(dto.tasks, 'assigneeIds'))

    let validIds: number[] = []
    if (assigneeIds.length > 0) {
      const validAssignees = await this.prisma.assignee.findMany({
        where: {
          id: { in: assigneeIds },
          workspaceId: source.workspaceId,
          deletedAt: null
        },
        select: { id: true }
      })
      validIds = map(validAssignees, 'id')
    }

    const [notStartedStatus] = await this.taskService.findDefaultStatusInWorkspaces(source.workspaceId)

    const taskPromises = await Promise.all(
      (dto.tasks ?? []).map(async ({ title, deadlineType, deadlineDate, assigneeIds: taskAssigneeIds }) => {
        const validTaskAssigneeIds = intersection(taskAssigneeIds, validIds)
        try {
          return await this.prisma.task.create({
            data: {
              title,
              deadlineType: deadlineType ?? DeadlineType.IMMEDIATE,
              dueDate: deadlineDate ? new Date(deadlineDate) : undefined,
              creationType: TaskCreationType.AI,
              workspaceId: source.workspaceId,
              statusId: notStartedStatus.id,
              sourceId: source.id,
              createdBy: source.createdBy,
              updatedBy: source.createdBy,
              ...(validTaskAssigneeIds.length > 0 && {
                assigneeStatuses: {
                  create: validTaskAssigneeIds.map(assigneeId => ({
                    assigneeId,
                    statusId: notStartedStatus.id
                  }))
                }
              })
            }
          })
        } catch (e) {
          console.log('Failed to Create AI Task: ', e)
          // Individual task creation failures shouldn't fail the whole extraction
        }
      })
    )

    const createdTasks = taskPromises.filter(t => !!t)

    const extractionStatus = createdTasks.length > 0
      ? ExtractionStatus.FINISHED_WITH_TASKS
      : ExtractionStatus.FINISHED_WITHOUT_TASKS

    await this.prisma.source.update({
      where: { id: source.id },
      data: { extractionStatus }
    })

    this.sendNotificationsForNewTasks(
      (dto.tasks ?? []).map(t => intersection(t.assigneeIds, validIds)),
      source.workspaceId, source.name, source.date ?? undefined
    ).catch((e: Error) => console.error('Failed to send AI task created notifications:', e));

    return await this.findOneAndEmit(source.id, user, workspace.urlName)
  }
}