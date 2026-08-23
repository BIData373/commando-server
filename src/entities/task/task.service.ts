import { Injectable } from '@nestjs/common';
import { filter, keyBy, map, uniq } from 'lodash';
import { renderTemplate } from '../../common/functions/template';
import { PrismaService } from '../../common/prisma.service';
import { PermissionType, Prisma, Task, User, WorkspaceStatus } from '../../types/prisma';
import { MessageRelayService } from '../services/message-relay.service';
import { WorkspaceWithPermissions } from '../workspace/types/workspace-with-permission.type';
import { CreateTaskDto } from './dto/request/create-task.dto';
import { UpdateTaskDto } from './dto/request/update-task.dto';
import { notificationTemplate, vectorUrl, chatUrl } from '../../common/consts/env';

type AssigneeStatusInclude = {
  include: { assignee: { include: { users: true } }; status: true };
}

type AssigneeStatusEntity = Prisma.AssigneeTaskStatusGetPayload<AssigneeStatusInclude>

type TaskInclude = Prisma.TaskGetPayload<{
  include: { assigneeStatuses: AssigneeStatusInclude, source: true, tags: true, messages: true }
}>


@Injectable()
export class TaskService {
  static readonly TASK_ROW_ID_SEPARATOR = "_"

  static readonly commonWhere: Prisma.TaskWhereInput = {
    deletedAt: null,
    OR: [
      { sourceId: null },
      { source: { draft: false } }
    ]
  }

  static readonly orderBy = {
    createdAt: 'desc'
  } satisfies Prisma.TaskOrderByWithRelationInput;

  constructor(
    private readonly prisma: PrismaService,
    private readonly messageRelayService: MessageRelayService
  ) { }

  static readonly includeMessageCount: Prisma.TaskInclude = {
    _count: {
      select: {
        messages: {
          where: {
            deletedAt: null
          },
        },
      },
    },
  }

  static baseInclude() {
    return {
      tags: true,
      source: {
        where: { deletedAt: null },
        include: { tags: true }
      },
      messages: {
        include: {
          user: true,
        },
        orderBy: TaskService.orderBy,
        take: 1,
      },
      ...TaskService.includeMessageCount,
      assigneeStatuses: {
        where: {
          assignee: {
            deletedAt: null,
          }
        },
        orderBy: { assigneeId: 'asc' },
        include: {
          assignee: { include: { users: true } },
          status: true
        }
      }
    } satisfies Prisma.TaskInclude
  }

  static withWorkspaceInclude(userId?: number) {
    return {
      ...TaskService.baseInclude(),
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
    { assigneeStatuses, messages, ...rest }: TaskInclude,
    workspace: WorkspaceWithPermissions,
    user: User,
  ) {
    return {
      ...rest,
      assigneeStatuses: assigneeStatuses.map(assigneeStatus =>
        TaskService.formatAssigneeStatus(assigneeStatus, workspace, user)
      ),
      workspace: TaskService.formatTaskWorkspace(workspace, user),
      lastMessage: messages[0]
    };
  }

  private async sendTaskCreatedNotifications(
    workspace: { title: string; chatNotification: boolean; mailNotification: boolean },
    taskId: number,
    taskName: string,
    recipients: string[]
  ) {
    const title = `קיבלת הנחיה חדשה מ${workspace.title}`
    const taskUrl = `${vectorUrl}/personal/task/${taskId}`

    if (workspace.chatNotification) {
      const chatMessage = `ההנחיה: ${taskName}\n מעבר להנחיה: ${taskUrl}`
      await this.messageRelayService.sendNotification(
        recipients,
        'chat',
        title,
        chatMessage
      )
    }
    if (workspace.mailNotification) {
      const html = renderTemplate(notificationTemplate!, {
        workspaceName: workspace.title,
        taskName,
        taskUrl,
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

  static workspaceArchiveWhere(isArchived?: boolean): Prisma.TaskWhereInput {
    return {
      ...(!isArchived && {
        archivedWorkspaceAssigneeTask: {
          none: { assigneeId: null }
        }
      })
    }
  }

  // FIX Dont include assignee users?
  async findInWorkspace(workspace: WorkspaceWithPermissions, isArchived?: boolean) {
    return await this.prisma.task.findMany({
      where: {
        workspaceId: workspace.id,
        ...TaskService.commonWhere,
        ...TaskService.workspaceArchiveWhere(isArchived)
      },
      include: {
        ...TaskService.baseInclude(),
        archivedWorkspaceAssigneeTask: true
      },
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
    { assigneeStatuses, messages, ...task }: TTask,
    defaultStatus: WorkspaceStatus,
    workspace: WorkspaceWithPermissions,
    user: User,
    onlyUserRows: boolean = false,
    // isArchived?: boolean,
    archiveMap?: Map<number | null, Date>
  ) {
    // const archiveIds = new Map(getArchiveIds(task))


    if (!onlyUserRows && assigneeStatuses.length === 0) {
      // const isTaskArchived = archiveIds.has(null)
      // const needToArchiveTask = isArchived ? !isTaskArchived : isTaskArchived

      return [{
        ...task,
        assigneeId: null,
        editable: false,
        otherAssignees: [],
        rowKey: TaskService.formatTaskRowId(task.id),
        status: defaultStatus,
        lastMessage: messages[0]
      }]
    }

    const formattedAssigneeStatuses = assigneeStatuses.map(
      assigneeStatus => TaskService.formatAssigneeStatus(assigneeStatus, workspace, user)
    )

    const assigneeStatusesForRows = onlyUserRows
      ? formattedAssigneeStatuses.filter(({ assignee }) => assignee.users.some(({ id }) => id === user.id))
      : formattedAssigneeStatuses

    return assigneeStatusesForRows
      .map(({ assigneeId, statusId, taskId, ...fields }) => ({
        ...task,
        rowKey: TaskService.formatTaskRowId(task.id, fields.assignee.id),
        assigneeId,
        ...fields,
        otherAssignees: formattedAssigneeStatuses.filter(current => current.assigneeId !== assigneeId),
        lastMessage: messages[0],
        archivedAt: archiveMap?.get(assigneeId) ?? null
      }))
  }

  static filterByArchiveStatus<T extends TaskInclude>(
    tasks: T[],
    getArchiveIds: (task: T) => ([number | null, Date])[],
    isArchived?: boolean
  ) {
    return tasks.flatMap((task) => {
      const archiveIds = new Map(getArchiveIds(task))

      if (task.assigneeStatuses.length === 0) {
        const isTaskArchived = archiveIds.has(null)
        const needToArchiveTask = isArchived ? !isTaskArchived : isTaskArchived
        if (needToArchiveTask) return []
        return [{ ...task, assigneeStatuses: [], archiveMap: archiveIds }]
      }

      const activeAssignees = task.assigneeStatuses.filter(
        ({ assigneeId }) => isArchived ? archiveIds.has(assigneeId) : !archiveIds.has(assigneeId)
      )

      if (activeAssignees.length === 0) {
        return []
      }

      return [{ ...task, assigneeStatuses: activeAssignees, archiveMap: archiveIds }]
    })
  }

  async findRowsInWorkspace(workspace: WorkspaceWithPermissions, user: User, isArchived?: boolean) {
    const tasks = await this.findInWorkspace(workspace, isArchived)
    const [defaultStatus] = await this.findDefaultStatusInWorkspaces(workspace.id)

    const filteredTasks = TaskService.filterByArchiveStatus(
      tasks,
      t => t.archivedWorkspaceAssigneeTask.map(a => [a.assigneeId, a.createdAt]),
      isArchived
    )

    return filteredTasks.map(({ archiveMap, ...task }) =>
      TaskService.extractTaskToRows(
        task,
        defaultStatus,
        workspace,
        user,
        false,
        isArchived ? archiveMap : undefined
      )
    ).flat()
  }

  async findBySource(sourceId: number, isArchived?: boolean) {
    return await this.prisma.task.findMany({
      where: {
        sourceId, deletedAt: null,
        ...TaskService.workspaceArchiveWhere(isArchived)
      },
      include: {
        ...TaskService.baseInclude(),
        archivedWorkspaceAssigneeTask: true
      },
      orderBy: TaskService.orderBy
    });
  }

  async findFormattedBySource(sourceId: number, workspace: WorkspaceWithPermissions, user: User, isArchived?: boolean) {
    const tasks = await this.findBySource(sourceId, isArchived)
    const filteredTasks = TaskService.filterByArchiveStatus(
      tasks,
      t => t.archivedWorkspaceAssigneeTask.map(a => [a.assigneeId, a.createdAt]),
      isArchived
    )

    return filteredTasks.map(({ archiveMap, ...task }) => TaskService.formatAdditionalTaskFields(task, workspace, user));
  }

  async findPersonal(user: User, isArchived?: boolean) {
    return await this.prisma.task.findMany({
      where: {
        assigneeStatuses: { some: { assignee: { users: { some: { id: user.id } } } } },
        ...TaskService.commonWhere,
        ...(!isArchived && {
          archivedUserAssigneeTask: {
            none: {
              userId: user.id,
              assigneeId: null
            }
          }
        })
      },
      include: {
        ...TaskService.withWorkspaceInclude(user.id),
        archivedUserAssigneeTask: true,
      },
      orderBy: TaskService.orderBy
    });
  }

  async findPersonalFormatted(user: User, isArchived?: boolean) {
    const tasks = await this.findPersonal(user, isArchived)
    const filteredTasks = TaskService.filterByArchiveStatus(
      tasks,
      t => t.archivedUserAssigneeTask.map(a => [a.assigneeId, a.createdAt]),
      isArchived
    )

    return filteredTasks.map(({ archiveMap, ...task }) => TaskService.formatAdditionalTaskFields(task, task.workspace, user));
  }

  async findPersonalRows(user: User, isArchived?: boolean) {
    const tasks = await this.findPersonal(user, isArchived)
    const filteredTasks = TaskService.filterByArchiveStatus(
      tasks,
      t => t.archivedUserAssigneeTask.map(a => [a.assigneeId, a.createdAt]),
      isArchived
    )

    const workspaceIds = uniq(map(filteredTasks, 'workspaceId'))
    const defaultStatuses = await this.findDefaultStatusInWorkspaces(...workspaceIds)
    const defaultStatusesMap = keyBy(defaultStatuses, 'workspaceId')

    return filteredTasks.map(({ archiveMap, ...task }) =>
      TaskService.extractTaskToRows(
        task,
        defaultStatusesMap[task.workspace.id],
        task.workspace,
        user,
        true,
        isArchived ? archiveMap : undefined
      )
    ).flat()
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
