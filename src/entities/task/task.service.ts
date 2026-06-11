import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Prisma, Task, User } from '../../types/prisma';
import { CreateTaskDto } from './dto/request/create-task.dto';
import { UpdateTaskDto } from './dto/request/update-task.dto';

@Injectable()
export class TaskService {
  static readonly include: Prisma.TaskInclude = {
    source: { include: { tags: true } },
    tags: true,
    assigneeStatuses: {
      orderBy: { assigneeId: 'asc' },
      include: {
        assignee: { include: { users: true } },
        status: true
      }
    }
  }

  static readonly includeWithWorkspace: Prisma.TaskInclude = {
    ...TaskService.include,
    workspace: true
  }

  constructor(private readonly prisma: PrismaService) { }

  async findDefaultStatusInWorkspace(workspaceId: number) {
    return await this.prisma.workspaceStatus.findFirstOrThrow({
      where: { type: 'NOT_STARTED', workspaceId },
      orderBy: { id: 'asc' }
    })
  }

  async create({ tags, workspaceId, sourceId, assignees, context, ...dto }: CreateTaskDto, userId: number) {
    const notStartedStatus = await this.findDefaultStatusInWorkspace(workspaceId)

    return await this.prisma.task.create({
      data: {
        ...dto,
        createdBy: userId,
        updatedBy: userId,
        workspace: {
          connect: { id: workspaceId }
        },
        ...(typeof sourceId === 'number' && {
          source: {
            connect: {
              id: sourceId
            }
          }
        }),
        ...(assignees && {
          assigneeStatuses: {
            create: assignees.map(({ id, description }) => ({
              description,
              assignee: { connect: { id } },
              status: { connect: { id: notStartedStatus.id } }
            }))
          }
        }),
        ...(tags && {
          tags: {
            connectOrCreate: tags.map(name => ({
              create: {
                name,
                workspace: { connect: { id: workspaceId } },
                createdBy: userId,
                updatedBy: userId
              },
              where: { name_workspaceId: { name, workspaceId } }
            }))
          }
        })
      },
      include: TaskService.includeWithWorkspace
    });
  }

  // FIX Dont include assignee users?
  async findInWorkspace(workspaceId: number) {
    return await this.prisma.task.findMany({
      where: { workspaceId, deletedAt: null },
      include: TaskService.include
    });
  }

  // FIX Implement
  async findPersonal(user: User) {
    return await this.prisma.task.findMany({
      where: {
        assigneeStatuses: { some: { assignee: { users: { some: { id: user.id } } } } },
        deletedAt: null
      },
      include: {
        ...TaskService.includeWithWorkspace,
        workspace: {
          include: {
            permissions: {
              where: {
                userId: user.id
              }
            }
          }
        }
      }
    });
  }

  async findOne(id: number) {
    return await this.prisma.task.findUnique({
      where: { id, deletedAt: null },
      include: TaskService.includeWithWorkspace,
    });
  }

  async update(
    { id, workspaceId }: Task,
    { assignees, tags, context, sourceId, ...dto }: UpdateTaskDto,
    updatedBy: number
  ) {
    const notStartedStatus = assignees !== undefined && assignees.length > 0
      ? await this.findDefaultStatusInWorkspace(workspaceId)
      : null;

    return await this.prisma.task.update({
      where: { id },
      data: {
        ...dto,
        ...(sourceId !== undefined && {
          source: sourceId === null
            ? { disconnect: true }
            : { connect: { id: sourceId } }
        }),
        ...(assignees !== undefined && {
          assigneeStatuses: {
            deleteMany: {
              assigneeId: { notIn: assignees.map(a => a.id) }
            },
            upsert: assignees.map(({ id: assigneeId, description, statusId }) => ({
              where: { taskId_assigneeId: { taskId: id, assigneeId } },
              create: {
                assigneeId,
                description,
                statusId: statusId ?? notStartedStatus!.id
              },
              update: {
                assigneeId,
                ...(description !== undefined && { description }),
                ...(statusId !== undefined && { statusId })
              }
            }))
          }
        }),
        ...(tags !== undefined && {
          tags: {
            connectOrCreate: tags.map(name => ({
              create: {
                name,
                workspaceId,
                createdBy: updatedBy,
                updatedBy: updatedBy
              },
              where: { name_workspaceId: { name, workspaceId } }
            })),
            set: tags.map(name => ({ name_workspaceId: { name, workspaceId } }))
          }
        }),
        updatedBy
      },
      include: TaskService.includeWithWorkspace
    });
  }

  async remove(id: number, deletedBy: number) {
    return await this.prisma.task.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
      include: TaskService.includeWithWorkspace
    });
  }
}
