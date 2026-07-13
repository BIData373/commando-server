import { Injectable } from '@nestjs/common';
import { keyBy, map, uniq } from 'lodash';
import { renderTemplate } from '../../common/functions/template';
import { PrismaService } from '../../common/prisma.service';
import { PermissionType, Prisma, Task, User, WorkspaceStatus } from '../../types/prisma';
import { MessageRelayService } from '../services/message-relay.service';
import { WorkspaceWithPermissions } from '../workspace/types/workspace-with-permission.type';
import { CreateTaskDto } from './dto/request/create-task.dto';
import { UpdateTaskDto } from './dto/request/update-task.dto';
import { MessageRelayService } from '../services/message-relay.service';
import { renderTemplate } from '../../common/functions/template';

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

  constructor(
    private readonly prisma: PrismaService,
    private readonly messageRelayService: MessageRelayService
  ) { }

  static baseInclude(userId?: number) {
    return {
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
            include: {
              users: userId
                ? { where: { id: userId } }
                : true
            }
          },
          status: true
        }
      }
    } satisfies Prisma.TaskInclude
  }

  static withWorkspaceInclude(userId?: number) {
    return {
      ...TaskService.baseInclude(userId),
      workspace: {
        include: {
          permissions: userId
            ? { where: { userId } }
            : true
        }
      }
    } satisfies Prisma.TaskInclude
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

  private async sendTaskCreatedNotifications(
    workspace: WorkspaceWithPermissions,
    taskId: number,
    taskName: string,
    recipients: string[]
  ) {
    const title = `קיבלת הנחיה חדשה מ${workspace.title}`
    const taskUrl = `${process.env.VECTOR_URL}/personal/task/${taskId}`

    if (workspace.chatNotification) {
      const chatMessage = `ההנחיה: ${taskName}\n מעבר להנחיה: ${taskUrl}`
      await this.messageRelayService.sendChatNotification(
        recipients,
        title,
        chatMessage
      )
    }
    if (workspace.mailNotification) {
      const html = renderTemplate(process.env.NOTIFICATION_TEMPLATE!, {
        workspaceName: workspace.title,
        taskName,
        taskUrl,
        vectorUrl: process.env.VECTOR_URL,
        chatUrl: process.env.VITE_CHAT_URL,
      })
      await this.messageRelayService.sendMailNotification(
        recipients,
        title,
        html
      )
    }
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

    const createdTask = await this.prisma.task.create({
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
      include: TaskService.withWorkspaceInclude(userId)
    });

    if (assignees?.length) {
      const users = await this.prisma.user.findMany({
        where: {
          assignees: {
            some: {
              id: {
                in: assignees.map(({ id }) => id)
              }
            }
          }
        },
        select: {
          upn: true
        }
      })
      const recipients = users.map(({ upn }) => upn)

      await this.sendTaskCreatedNotifications(
        createdTask.workspace,
        createdTask.id,
        createdTask.title,
        recipients
      )
    }
    return createdTask;
  }

  // FIX Dont include assignee users?
  async findInWorkspace(workspace: WorkspaceWithPermissions) {
    return await this.prisma.task.findMany({
      where: {
        workspaceId: workspace.id,
        deletedAt: null,
        source: {
          draft: false
        }
      },
      include: TaskService.baseInclude(),
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
    { assigneeStatuses, ...task }: TTask,
    defaultStatus: WorkspaceStatus,
    workspace: WorkspaceWithPermissions,
    user: User
  ) {
    if (assigneeStatuses.length === 0) {
      return [{
        ...task,
        editable: false,
        otherAssignees: [],
        rowKey: TaskService.formatTaskRowId(task.id),
        status: defaultStatus
      }]
    }

    const formattedAssigneeStatuses = assigneeStatuses.map(
      assigneeStatus => TaskService.formatAssigneeStatus(assigneeStatus, workspace, user)
    )

    return formattedAssigneeStatuses
      .map(({ assigneeId, statusId, taskId, ...fields }, index) => ({
        ...task,
        rowKey: TaskService.formatTaskRowId(task.id, fields.assignee.id),
        ...fields,
        otherAssignees: formattedAssigneeStatuses.filter((_, otherIndex) => otherIndex !== index)
      }))
  }

  async findRowsInWorkspace(workspace: WorkspaceWithPermissions, user: User) {
    const tasks = await this.findInWorkspace(workspace)
    const [defaultStatus] = await this.findDefaultStatusInWorkspaces(workspace.id)

    const taskRows = tasks
      .map(task => TaskService.extractTaskToRows(task, defaultStatus, workspace, user))
      .flat()

    return taskRows
  }

  async findPersonal(user: User) {
    return await this.prisma.task.findMany({
      where: {
        assigneeStatuses: { some: { assignee: { users: { some: { id: user.id } } } } },
        deletedAt: null,
        source: {
          draft: false
        }
      },
      include: TaskService.withWorkspaceInclude(user.id),
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
      .map(task => TaskService.extractTaskToRows(task, defaultStatusesMap[task.workspace.id], task.workspace, user))
      .flat()
      .map(task => ({ ...task, workspace: TaskService.formatTaskWorkspace(task.workspace, user) }))

    return taskRows
  }

  async findOne(id: number, user: User) {
    const task = await this.prisma.task.findUnique({
      where: { id, deletedAt: null },
      include: TaskService.withWorkspaceInclude(user.id)
    });

    if (!task) {
      return null;
    }

    const formatted = TaskService.formatAdditionalTaskFields(task, task.workspace, user);

    if (task.assigneeStatuses.length > 0) {
      return formatted;
    }

    const [defaultStatus] = await this.findDefaultStatusInWorkspaces(task.workspaceId);

    return { ...formatted, status: defaultStatus };
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
      include: TaskService.withWorkspaceInclude(updatedBy)
    });
  }

  async remove(id: number, deletedBy: number) {
    return await this.prisma.task.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
      include: TaskService.withWorkspaceInclude(deletedBy)
    });
  }
}
