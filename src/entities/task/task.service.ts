import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { PermissionType, Prisma, Task, User } from '../../types/prisma';
import { WorkspaceWithPermissions } from '../workspace/types/workspace-with-permission.type';
import { CreateTaskDto } from './dto/request/create-task.dto';
import { UpdateTaskDto } from './dto/request/update-task.dto';

type AssigneeStatusInclude = {
  include: { assignee: { include: { users: true } }; status: true };
}

type AssigneeStatusEntity = Prisma.AssigneeTaskStatusGetPayload<AssigneeStatusInclude>

@Injectable()
export class TaskService {
  static readonly orderBy = {
    createdAt: 'desc'
  } satisfies Prisma.TaskOrderByWithRelationInput;

  static readonly include = {
    tags: true,
    source: {
      where: { deletedAt: null },
      include: { tags: true }
    },
    assigneeStatuses: {
      where: { assignee: { deletedAt: null } },
      orderBy: { assigneeId: 'asc' },
      include: {
        assignee: {
          include: { users: true }
        },
        status: true
      }
    }
  } satisfies Prisma.TaskInclude;

  static readonly includeWithWorkspace = {
    ...TaskService.include,
    workspace: true
  } satisfies Prisma.TaskInclude;

  static workspaceWithPermissionsInclude(userId: number) {
    return {
      include: {
        permissions: {
          where: { userId }
        }
      }
    } as const;
  }

  static formatAssigneeStatus(
    assigneeStatus: AssigneeStatusEntity,
    workspace: WorkspaceWithPermissions,
    user: User,
  ) {
    const isManager = (
      workspace.permissions[0]?.type === PermissionType.MANAGER ||
      !!user.info?.isBI
    )

    const isAssigned = assigneeStatus.assignee.users.some(u => u.id === user.id)

    const editable = (
      (workspace.assigneeStatusEditable && isAssigned) ||
      isManager
    )

    return {
      ...assigneeStatus,
      editable
    }
  }

  static formatTask(
    { assigneeStatuses, ...rest }: Prisma.TaskGetPayload<{
      include: { assigneeStatuses: AssigneeStatusInclude }
    }>,
    workspace: WorkspaceWithPermissions,
    user: User,
  ) {
    return {
      ...rest,
      assigneeStatuses: assigneeStatuses.map(assigneeStatus =>
        TaskService.formatAssigneeStatus(assigneeStatus, workspace, user)
      ),
      ...(workspace && {
        workspace: {
          ...workspace,
          permissionType: !!user.info?.isBI
            ? PermissionType.MANAGER
            : workspace?.permissions?.[0]?.type
        }
      }),
    };
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
  async findInWorkspace(workspace: WorkspaceWithPermissions, user: User) {
    const tasks = await this.prisma.task.findMany({
      where: { workspaceId: workspace.id, deletedAt: null },
      include: TaskService.include,
      orderBy: TaskService.orderBy
    });

    return tasks.map(task => TaskService.formatTask(task, workspace, user));
  }

  async findPersonal(user: User) {
    const tasks = await this.prisma.task.findMany({
      where: {
        assigneeStatuses: { some: { assignee: { users: { some: { id: user.id } } } } },
        deletedAt: null
      },
      include: {
        ...TaskService.include,
        workspace: TaskService.workspaceWithPermissionsInclude(user.id)
      },
      orderBy: TaskService.orderBy
    });

    return tasks.map(task => TaskService.formatTask(task, task.workspace, user));
  }

  async findOne(id: number, user: User) {
    const task = await this.prisma.task.findUnique({
      where: { id, deletedAt: null },
      include: {
        ...TaskService.include,
        workspace: TaskService.workspaceWithPermissionsInclude(user.id)
      }
    });

    if (!task) return null;

    return TaskService.formatTask(task, task.workspace, user);
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
