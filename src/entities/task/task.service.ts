import { Injectable } from '@nestjs/common';
import { keyBy, map, uniq } from 'lodash';
import { PrismaService } from '../../common/prisma.service';
import { PermissionType, Prisma, Task, User, WorkspaceStatus } from '../../types/prisma';
import { WorkspaceWithPermissions } from '../workspace/types/workspace-with-permission.type';
import { CreateTaskDto } from './dto/request/create-task.dto';
import { UpdateTaskDto } from './dto/request/update-task.dto';

type AssigneeStatusInclude = {
  include: { assignee: { include: { users: true } }; status: true };
}

type AssigneeStatusEntity = Prisma.AssigneeTaskStatusGetPayload<AssigneeStatusInclude>

type TaskInclude = Prisma.TaskGetPayload<{
  include: { assigneeStatuses: AssigneeStatusInclude, source: true, tags: true }
}>

@Injectable()
export class TaskService {
  static readonly TASK_ROW_ID_SEPARATOR = "_"

  static readonly orderBy = {
    id: 'asc'
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

  constructor(private readonly prisma: PrismaService) { }

  static workspaceWithPermissionsInclude(userId: number) {
    return {
      ...TaskService.include,
      workspace: {
        include: {
          permissions: {
            where: { userId }
          }
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

  static formatTaskWorkspace(workspace: WorkspaceWithPermissions, user: User) {
    return {
      ...workspace,
      permissionType: !!user.info?.isBI
        ? PermissionType.MANAGER
        : workspace?.permissions?.[0]?.type
    }
  }

  static formatAdditionalTaskFields(
    { assigneeStatuses, ...rest }: TaskInclude,
    workspace: WorkspaceWithPermissions,
    user: User,
  ) {
    return {
      ...rest,
      assigneeStatuses: assigneeStatuses.map(assigneeStatus =>
        TaskService.formatAssigneeStatus(assigneeStatus, workspace, user)
      ),
      workspace: TaskService.formatTaskWorkspace(workspace, user),
    };
  }

  async findDefaultStatusInWorkspaces(...workspaceIds: number[]) {
    return await this.prisma.workspaceStatus.findMany({
      where: { type: 'NOT_STARTED', workspaceId: { in: workspaceIds } },
      orderBy: { id: 'asc' }
    })
  }

  async create(
    { tags, workspaceId, sourceId, assignees, context, ...dto }: CreateTaskDto,
    userId: number
  ) {
    const [notStartedStatus] = await this.findDefaultStatusInWorkspaces(workspaceId)

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
      include: TaskService.workspaceWithPermissionsInclude(userId)
    });
  }

  // FIX Dont include assignee users?
  async findInWorkspace(workspace: WorkspaceWithPermissions) {
    return await this.prisma.task.findMany({
      where: { workspaceId: workspace.id, deletedAt: null },
      include: TaskService.include,
      orderBy: TaskService.orderBy
    });
  }

  async findInWorkspaceFormatted(workspace: WorkspaceWithPermissions, user: User) {
    const tasks = await this.findInWorkspace(workspace)

    return tasks.map(task => TaskService.formatAdditionalTaskFields(task, workspace, user));
  }

  static formatTaskRowId(taskId: number, assigneeId?: number) {
    return `${taskId}${TaskService.TASK_ROW_ID_SEPARATOR}${assigneeId}`
  }

  static extractTaskToRows<TTask extends TaskInclude>(
    task: TTask,
    defaultStatuses: Record<number, WorkspaceStatus>,
    workspace: WorkspaceWithPermissions,
    user: User
  ) {
    if (task.assigneeStatuses.length === 0) {
      return [{
        ...task,
        editable: false,
        rowKey: TaskService.formatTaskRowId(task.id),
        status: defaultStatuses[task.workspaceId]
      }]
    }

    const formattedAssigneeStatuses = task.assigneeStatuses.map(
      assigneeStatus => TaskService.formatAssigneeStatus(assigneeStatus, workspace, user)
    )

    return formattedAssigneeStatuses.map((formattedAssigneeStatus, index) => ({
      ...task,
      rowKey: TaskService.formatTaskRowId(task.id, formattedAssigneeStatus.assignee.id),
      ...formattedAssigneeStatus,
      otherAssignees: formattedAssigneeStatuses.filter((_, otherIndex) => otherIndex !== index)
    }))
  }

  async findRowsInWorkspace(workspace: WorkspaceWithPermissions, user: User) {
    const tasks = await this.findInWorkspace(workspace)
    const [defaultStatus] = await this.findDefaultStatusInWorkspaces(workspace.id)

    const taskRows = tasks.flatMap(
      task => TaskService.extractTaskToRows(task, { [workspace.id]: defaultStatus }, workspace, user)
    )

    return taskRows
  }

  async findPersonal(user: User) {
    return await this.prisma.task.findMany({
      where: {
        assigneeStatuses: { some: { assignee: { users: { some: { id: user.id } } } } },
        deletedAt: null
      },
      include: TaskService.workspaceWithPermissionsInclude(user.id),
      orderBy: TaskService.orderBy
    });
  }

  async findPersonalFormatted(user: User) {
    const tasks = await this.findPersonal(user)

    return tasks.map(task => TaskService.formatAdditionalTaskFields(task, task.workspace, user));
  }

  async findPersonalRows(user: User) {
    const tasks = await this.findPersonal(user)

    const workspaceIds = uniq(map(tasks, 'workspaceId'))
    const defaultStatuses = await this.findDefaultStatusInWorkspaces(...workspaceIds)
    const defaultStatusesMap = keyBy(defaultStatuses, 'workspaceId')

    const taskRows = tasks
      .flatMap(task => TaskService.extractTaskToRows(task, defaultStatusesMap, task.workspace, user))
      .map(task => ({ ...task, workspace: TaskService.formatTaskWorkspace(task.workspace, user) }))

    return taskRows
  }

  async findOne(id: number, user: User) {
    const task = await this.prisma.task.findUnique({
      where: { id, deletedAt: null },
      include: TaskService.workspaceWithPermissionsInclude(user.id)
    });

    return task ? TaskService.formatAdditionalTaskFields(task, task.workspace, user) : null;
  }

  async update(
    { id, workspaceId }: Task,
    { assignees, tags, context, sourceId, ...dto }: UpdateTaskDto,
    updatedBy: number
  ) {
    const [notStartedStatus] = assignees !== undefined && assignees.length > 0
      ? await this.findDefaultStatusInWorkspaces(workspaceId)
      : [null];

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
      include: TaskService.workspaceWithPermissionsInclude(updatedBy)
    });
  }

  async remove(id: number, deletedBy: number) {
    return await this.prisma.task.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
      include: TaskService.workspaceWithPermissionsInclude(deletedBy)
    });
  }
}
