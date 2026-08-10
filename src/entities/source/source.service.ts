import { BadRequestException, Injectable } from '@nestjs/common';
import { flatMap, intersection, map, uniq } from 'lodash';
import { decodeMulterFilename } from '../../common/functions/string';
import { PrismaService } from '../../common/prisma.service';
import { SocketGateway } from '../../socket/socket.gateway';
import { SocketEventType } from '../../socket/types/socket-event-type.enum';
import { TaskRunnerService } from '../../task-runner/task-runner.service';
import { DeadlineType, ExtractionStatus, Prisma, Source, TaskCreationType, User } from '../../types/prisma';
import { S3Service } from '../s3/s3.service';
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
  ) { }

  async create(
    { tags, workspaceId, context, aiExtraction, draft, ...dto }: CreateSourceDto,
    userId: number,
    file?: Express.Multer.File
  ) {
    const attachmentKey = file && await this.s3.upload(file, 'sources')
    const attachmentName = file ? decodeMulterFilename(file.originalname) : undefined

    const source = await this.prisma.source.create({
      data: {
        ...dto,
        workspaceId,
        attachmentKey,
        attachmentName,
        draft: aiExtraction || draft,
        extractionStatus: aiExtraction ? ExtractionStatus.PENDING : undefined,
        ...(tags !== undefined && ({
          tags: {
            connectOrCreate: tags.map(name => ({
              create: {
                name,
                workspaceId,
                createdBy: userId,
                updatedBy: userId
              },
              where: { name_workspaceId: { name, workspaceId } }
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

    return source
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
    { tags, context, deleteAttachment, workspaceId: _, aiExtraction, draft, ...dto }: UpdateSourceDto,
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
          tags: {
            connectOrCreate: tags.map(name => ({
              create: {
                name,
                workspace: { connect: { id: workspaceId } },
                createdBy: updatedBy,
                updatedBy: updatedBy
              },
              where: { name_workspaceId: { name, workspaceId } }
            })),
            set: tags.map(name => ({ name_workspaceId: { name, workspaceId } }))
          }
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

    const taskCount = taskPromises.filter(t => !!t).length

    const extractionStatus = taskCount > 0
      ? ExtractionStatus.FINISHED_WITH_TASKS
      : ExtractionStatus.FINISHED_WITHOUT_TASKS

    await this.prisma.source.update({
      where: { id: source.id },
      data: { extractionStatus }
    })

    return await this.findOneAndEmit(source.id, user, workspace.urlName)
  }
}