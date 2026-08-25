import { Injectable } from '@nestjs/common';
import { renderTemplate } from '../../common/functions/template';
import { PrismaService } from '../../common/prisma.service';
import { PermissionType, Prisma, Task, User } from '../../types/prisma';
import { MessageRelayService } from '../services/message-relay.service';
import { WorkspaceWithPermissions } from '../workspace/types/workspace-with-permission.type';
import { tagsConnectOrCreateArgs, tagsSetOrCreateArgs } from '../tag/functions/tag-args';
import { CreateTaskDto } from './dto/request/create-task.dto';
import { UpdateTaskDto } from './dto/request/update-task.dto';
import { taskAssigneeStatusesCreateArgs } from './functions/task-args';
import { notificationTemplate, vectorUrl, chatUrl } from '../../common/consts/env';

type AssigneeStatusInclude = {
  include: { assignee: { include: { users: true } }; status: true };
}

type AssigneeStatusEntity = Prisma.AssigneeTaskStatusGetPayload<AssigneeStatusInclude>

type TaskInclude = Prisma.TaskGetPayload<{
  include: { assigneeStatuses: AssigneeStatusInclude, source: true, tags: true, messages: true, status: true }
}>

type TaskArchivedWorkspaceAssigneeInclude = Prisma.ArchivedWorkspaceAssigneeTaskGetPayload<{}>

type TaskArchivedUserAssigneeInclude = Prisma.ArchivedUserAssigneeTaskGetPayload<{}>


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
      status: true,
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

  static getArchivedWorkspaceIdsMap(archivedWorkspaceAssigneeTask: TaskArchivedWorkspaceAssigneeInclude[]) {
    return new Map(archivedWorkspaceAssigneeTask.map(a => [a.assigneeId, a.createdAt]))
  }

  static getArchivedUserIdsMap(archivedUserAssigneeTask: TaskArchivedUserAssigneeInclude[]) {
    return new Map(archivedUserAssigneeTask.map(a => [a.assigneeId, a.createdAt]))
  }

  static isManager(workspace: WorkspaceWithPermissions, user: User) {
    return (
      workspace.permissions[0]?.type === PermissionType.MANAGER ||
      !!user.info?.isBI
    )
  }

  static formatAssigneeStatus(
    assigneeStatus: AssigneeStatusEntity,
    workspace: WorkspaceWithPermissions,
    user: User,
  ) {

    const isAssigned = assigneeStatus.assignee.users.some(u => u.id === user.id)

    const editable = (
      (workspace.assigneeStatusEditable && isAssigned) ||
      TaskService.isManager(workspace, user)
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

  static filterByArchivedAssignee<TTask extends TaskInclude>(
    task: TTask,
    archiveIds: Map<number | null, Date>,
    isArchived?: boolean,
  ) {
    if (isArchived === undefined) return task.assigneeStatuses

    if (task.assigneeStatuses.length === 0) {
      return archiveIds.has(null) !== isArchived ? null : task.assigneeStatuses
    }

    const activeAssignees = task.assigneeStatuses.filter(
      ({ assigneeId }) => isArchived ? archiveIds.has(assigneeId) : !archiveIds.has(assigneeId)
    )

    return activeAssignees.length === 0 ? null : activeAssignees
  }

  static formatAdditionalTaskFields<TTask extends TaskInclude>(
    originalTask: TTask,
    workspace: WorkspaceWithPermissions,
    user: User,
    archivedIds: Map<number | null, Date>,
    isArchived?: boolean,
  ) {
    const { assigneeStatuses, messages, status, ...rest } = originalTask;

    const activeAssignees = TaskService.filterByArchivedAssignee(originalTask, archivedIds, isArchived)
    if (!activeAssignees) {
      return []
    }

    const filteredAssignees = isArchived === undefined ? assigneeStatuses : activeAssignees

    const isManager = TaskService.isManager(workspace, user)

    return [{
      ...rest,
      status,
      ...(filteredAssignees.length === 0 && { editable: isManager }),
      assigneeStatuses: filteredAssignees.map(assigneeStatus =>
        TaskService.formatAssigneeStatus(assigneeStatus, workspace, user)
      ),
      workspace: TaskService.formatTaskWorkspace(workspace, user),
      lastMessage: messages[0]
    }];
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
        status: {
          connect: { id: notStartedStatus.id }
        },
        ...(typeof sourceId === 'number' && {
          source: {
            connect: {
              id: sourceId
            }
          }
        }),
        ...(assignees?.length && {
          assigneeStatuses: taskAssigneeStatusesCreateArgs(assignees, notStartedStatus.id)
        }),
        ...(tags && {
          tags: tagsConnectOrCreateArgs(tags, workspaceId, userId)
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

  async findInWorkspaceFormatted(workspace: WorkspaceWithPermissions, user: User, isArchived?: boolean) {
    const tasks = await this.findInWorkspace(workspace, isArchived)

    return tasks.flatMap(task => TaskService.formatAdditionalTaskFields(
      task,
      workspace,
      user,
      TaskService.getArchivedWorkspaceIdsMap(task.archivedWorkspaceAssigneeTask),
      isArchived
    )
    )
  }

  static formatTaskRowId(taskId: number, assigneeId?: number) {
    return `${taskId}${TaskService.TASK_ROW_ID_SEPARATOR}${assigneeId}`
  }

  static extractTaskToRows<TTask extends TaskInclude>(
    originalTask: TTask,
    workspace: WorkspaceWithPermissions,
    user: User,
    onlyUserRows: boolean = false,
    archiveIds: Map<number | null, Date>,
    isArchived?: boolean,
  ) {
    const { assigneeStatuses, messages, status, ...task } = originalTask
    const activeAssignees = TaskService.filterByArchivedAssignee(originalTask, archiveIds, isArchived)

    if (!activeAssignees) return []

    if (!onlyUserRows && assigneeStatuses.length === 0) {

      return [{
        ...task,
        assigneeId: null,
        editable: TaskService.isManager(workspace, user),
        otherAssignees: [],
        rowKey: TaskService.formatTaskRowId(task.id),
        status,
        lastMessage: messages[0]
      }]
    }

    const formattedAssigneeStatuses = assigneeStatuses.map(
      assigneeStatus => TaskService.formatAssigneeStatus(assigneeStatus, workspace, user)
    )

    const assigneeStatusesForRows = onlyUserRows
      ? activeAssignees.filter(({ assignee }) => assignee.users.some(({ id }) => id === user.id))
      : activeAssignees

    return assigneeStatusesForRows
      .map(({ assigneeId, statusId, taskId, ...fields }) => ({
        ...task,
        rowKey: TaskService.formatTaskRowId(task.id, fields.assignee.id),
        assigneeId,
        ...fields,
        otherAssignees: formattedAssigneeStatuses.filter(current => current.assigneeId !== assigneeId),
        lastMessage: messages[0],
        archivedAt: archiveIds.get(assigneeId) ?? null
      }))
  }

  async findRowsInWorkspace(workspace: WorkspaceWithPermissions, user: User, isArchived?: boolean) {
    const tasks = await this.findInWorkspace(workspace, isArchived);

    return tasks.map(task =>
      TaskService.extractTaskToRows(
        task,
        workspace,
        user,
        false,
        TaskService.getArchivedWorkspaceIdsMap(task.archivedWorkspaceAssigneeTask),
        isArchived
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

    return tasks.flatMap(task => TaskService.formatAdditionalTaskFields(
      task,
      workspace,
      user,
      TaskService.getArchivedWorkspaceIdsMap(task.archivedWorkspaceAssigneeTask),
      isArchived
    )
    )
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
        archivedUserAssigneeTask: { where: { userId: user.id } },
      },
      orderBy: TaskService.orderBy
    });
  }

  async findPersonalFormatted(user: User, isArchived?: boolean) {
    const tasks = await this.findPersonal(user, isArchived)

    return tasks.flatMap(task => TaskService.formatAdditionalTaskFields(
      task,
      task.workspace,
      user,
      TaskService.getArchivedUserIdsMap(task.archivedUserAssigneeTask),
      isArchived
    )
    )
  }

  async findPersonalRows(user: User, isArchived?: boolean) {
    const tasks = await this.findPersonal(user, isArchived);

    return tasks.map(task =>
      TaskService.extractTaskToRows(
        task,
        task.workspace,
        user,
        true,
        TaskService.getArchivedUserIdsMap(task.archivedUserAssigneeTask),
        isArchived
      )
    ).flat()
  }

  async findOne(id: number, user: User, isArchived?: boolean) {
    const task = await this.prisma.task.findUnique({
      where: { id, deletedAt: null },
      include: {
        ...TaskService.withWorkspaceInclude(user.id),
        archivedWorkspaceAssigneeTask: true
      }
    });

    if (!task) {
      return null;
    }

    const [formatted] = TaskService.formatAdditionalTaskFields(
      task,
      task.workspace,
      user,
      TaskService.getArchivedWorkspaceIdsMap(task.archivedWorkspaceAssigneeTask),
      isArchived
    );

    return formatted ?? null;
  }

  async update(
    { id, workspaceId }: Task,
    { assignees, tags, context, sourceId, statusId, ...dto }: UpdateTaskDto,
    updatedBy: number
  ) {
    const [notStartedStatus] = assignees !== undefined
      ? await this.findDefaultStatusInWorkspaces(workspaceId)
      : [null];

    const hasAssignees = assignees !== undefined && assignees.length > 0;

    const status = hasAssignees
      ? { disconnect: true }
      : assignees !== undefined
        ? { connect: { id: notStartedStatus!.id } }
        : statusId !== undefined
          ? { connect: { id: statusId } }
          : undefined;

    const assigneeStatuses = assignees && {
      deleteMany: !hasAssignees
        ? {}
        : {
          assigneeId: { notIn: assignees.map(a => a.id) }
        },
      ...(hasAssignees && {
        upsert: assignees.map(({
          id: assigneeId,
          description,
          statusId: assigneeStatusId
        }) => ({
          where: { taskId_assigneeId: { taskId: id, assigneeId } },
          create: {
            assigneeId,
            description,
            statusId: assigneeStatusId ?? notStartedStatus!.id
          },
          update: {
            assigneeId,
            description,
            statusId: assigneeStatusId
          }
        }))
      })
    }

    return await this.prisma.task.update({
      where: { id },
      data: {
        ...dto,
        ...(sourceId !== undefined && {
          source: sourceId === null
            ? { disconnect: true }
            : { connect: { id: sourceId } }
        }),
        status,
        assigneeStatuses,
        ...(tags !== undefined && {
          tags: tagsSetOrCreateArgs(tags, workspaceId, updatedBy)
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
