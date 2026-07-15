import { Injectable } from '@nestjs/common';
import { flatMap, intersection, map, uniq } from 'lodash';
import { decodeMulterFilename } from '../../common/functions/string';
import { PrismaService } from '../../common/prisma.service';
import { SocketGateway } from '../../socket/socket.gateway';
import { SocketEventType } from '../../socket/types/socket-event-type.enum';
import { TaskRunnerService } from '../../task-runner/task-runner.service';
import { DeadlineType, Prisma, Source, TaskCreationType } from '../../types/prisma';
import { S3Service } from '../s3/s3.service';
import { TaskService } from '../task/task.service';
import { CreateSourceDto } from './dto/request/create-source.dto';
import { GetAIExtractionCallbackDto } from './dto/request/get-ai-extraction-callback.dto';
import { UpdateSourceDto } from './dto/request/update-source.dto';

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
    { tags, workspaceId, context, aiExtraction, ...dto }: CreateSourceDto,
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

  async findInWorkspace(workspaceId: number): Promise<any[]> {
    return await this.prisma.source.findMany({
      where: { workspaceId, deletedAt: null },
      include: SourceService.include
    });
  }

  async findOne(id: number) {
    return await this.prisma.source.findUnique({
      where: { id, deletedAt: null },
      include: SourceService.include
    });
  }

  async update(
    { id, workspaceId, ...source }: Source,
    { tags, context, deleteAttachment, ...dto }: UpdateSourceDto,
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

    return await this.prisma.source.update({
      where: { id },
      data: {
        ...dto,
        attachmentKey,
        attachmentName,
        updatedBy,
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

  async remove(id: number, deletedBy: number) {
    return await this.prisma.source.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
      include: SourceService.include
    });
  }

  async processAiResult(source: Source, dto: GetAIExtractionCallbackDto) {
    const workspace = await this.prisma.workspace.findUniqueOrThrow({
      where: { id: source.workspaceId }
    })

    if (!dto.success) {
      this.socket.emitToUrlName(
        workspace.urlName,
        SocketEventType.TASK_EXTRACTION_FAILURE,
        { reason: dto.reason }
      )
      return null
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

    const results = await Promise.allSettled(
      (dto.tasks ?? []).map(({ title, deadlineType, deadlineDate, assigneeIds: taskAssigneeIds }) => {
        const validTaskAssigneeIds = intersection(taskAssigneeIds, validIds)
        return this.prisma.task.create({
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
          },
          include: TaskService.withWorkspaceInclude(source.createdBy)
        })
      })
    )
    const tasks = flatMap(results, r => r.status === 'fulfilled' ? [r.value] : [])

    this.socket.emitToUrlName(
      workspace.urlName,
      SocketEventType.TASK_EXTRACTION_SUCCESS,
      { sourceId: source.id, tasks }
    )

    return tasks
  }
}