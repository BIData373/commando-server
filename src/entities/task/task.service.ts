import { Injectable } from '@nestjs/common'
import { keyBy, mapValues, range } from 'lodash'
import { chatUrl, notificationTemplate, vectorUrl } from '../../common/consts/env'
import { renderTemplate } from '../../common/functions/template'
import { PrismaService } from '../../common/prisma.service'
import { ArchivedUserAssigneeTask, ArchivedWorkspaceAssigneeTask, PermissionType, Prisma, Task, User } from '../../types/prisma'
import { ArchivedWorkspaceAssigneeService } from '../archived-workspace-assignee-task/archived-workspace-assignee-task.service'
import { MessageRelayService } from '../services/message-relay.service'
import { tagsConnectOrCreateArgs, tagsSetOrCreateArgs } from '../tag/functions/tag-args'
import { WorkspaceWithPermissions } from '../workspace/types/workspace-with-permission.type'
import { CreateTaskDto } from './dto/request/create-task.dto'
import { UpdateTaskDto } from './dto/request/update-task.dto'
import { taskAssigneeStatusesCreateArgs } from './functions/task-args'

type AssigneeStatusInclude = {
  include: { assignee: { include: { users: true } }; status: true }
}

type AssigneeStatusEntity = Prisma.AssigneeTaskStatusGetPayload<AssigneeStatusInclude>

type TaskInclude = Prisma.TaskGetPayload<{
  include: { assigneeStatuses: AssigneeStatusInclude, source: true, tags: true, messages: true, status: true }
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
        where: { deletedAt: null },
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

  static getArchivedIdsMap(
    archives: (ArchivedWorkspaceAssigneeTask | ArchivedUserAssigneeTask)[]
  ): Record<number, Date | undefined> {
    return mapValues(keyBy(archives, 'assigneeId'), 'createdAt')
  }

  static formatAssigneeStatus(
    workspace: WorkspaceWithPermissions,
    user: User,
    archivedIds: Record<number, Date | undefined>,
    wholeTaskArchivedAt: Date | null,
    assigneeStatus?: AssigneeStatusEntity
  ) {
    const isAssigned = assigneeStatus?.assignee?.users?.some(u => u.id === user.id)

    const archivedAt = (assigneeStatus && archivedIds[assigneeStatus.assigneeId])
      ?? wholeTaskArchivedAt
      ?? null

    const editable = !!user.info?.isBI || (
      ((
        workspace.assigneeStatusEditable && isAssigned) ||
        workspace.permissions[0]?.type === PermissionType.MANAGER
      ) && !archivedAt
    )

    return {
      ...assigneeStatus,
      archivedAt,
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
    archivedIds: Record<number, Date | undefined>,
    isArchived?: boolean,
  ) {
    if (isArchived === undefined) return task.assigneeStatuses

    const isWholeTaskArchived = !!task.archivedAt

    if (task.assigneeStatuses.length === 0) {
      return isWholeTaskArchived !== isArchived ? null : task.assigneeStatuses
    }

    const activeAssignees = task.assigneeStatuses.filter(
      ({ assigneeId }) => isArchived
        ? (isWholeTaskArchived || !!archivedIds[assigneeId])
        : (!isWholeTaskArchived && !archivedIds[assigneeId])
    )

    return activeAssignees.length === 0 ? null : activeAssignees
  }

  static formatAdditionalTaskFields<TTask extends TaskInclude>(
    originalTask: TTask,
    workspace: WorkspaceWithPermissions,
    user: User,
    archivedIds: Record<number, Date | undefined>,
    isArchived?: boolean,
  ) {
    const { assigneeStatuses, messages, status, ...rest } = originalTask

    const activeAssignees = TaskService.filterByArchivedAssignee(originalTask, archivedIds, isArchived)
    if (!activeAssignees) {
      return []
    }

    const filteredAssignees = isArchived === undefined ? assigneeStatuses : activeAssignees

    return [{
      ...rest,
      status,
      ...(filteredAssignees.length === 0 && TaskService.formatAssigneeStatus(workspace, user, archivedIds, originalTask.archivedAt)),
      assigneeStatuses: filteredAssignees.map(assigneeStatus =>
        TaskService.formatAssigneeStatus(workspace, user, archivedIds, originalTask.archivedAt, assigneeStatus)
      ),
      workspace: TaskService.formatTaskWorkspace(workspace, user),
      lastMessage: messages[0]
    }]
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

      await this.messageRelayService.sendNotification(recipients, title, chatMessage, 'chat')
    }

    if (workspace.mailNotification) {
      const html = renderTemplate(notificationTemplate!, {
        workspaceName: workspace.title,
        taskName,
        taskUrl,
        vectorUrl: vectorUrl,
        chatUrl: chatUrl,
      })

      await this.messageRelayService.sendNotification(recipients, title, html, 'mail')
    }
  }

  async findDefaultStatusInWorkspaces(...workspaceIds: number[]) {
    return await this.prisma.workspaceStatus.findMany({
      where: { type: 'NOT_STARTED', workspaceId: { in: workspaceIds } },
      orderBy: { id: 'asc' }
    })
  }

  // Reserves `count` serial ids for a workspace and returns them in order.
  // The bump-and-read is one atomic `UPDATE ... RETURNING`, so it takes a row lock on the
  // workspace and two concurrent creates queue instead of racing for the same number.
  // Must run inside the same transaction as the task create — otherwise a rolled-back create
  // burns a number.
  // Raw rather than `tx.workspace.update` on purpose: Prisma would fire Workspace's `@updatedAt`
  // and rewrite the workspace's audit timestamp every time a task is created, with no matching
  // `updatedBy` to explain it.
  static async reserveSerialIdsTx(tx: Prisma.TransactionClient, workspaceId: number, count: number = 1) {
    if (count < 1) return []

    const [{ lastTaskId }] = await tx.$queryRaw<{ lastTaskId: number }[]>`
      UPDATE "workspaces"
      SET "last_task_id" = "last_task_id" + ${count}
      WHERE "id" = ${workspaceId}
      RETURNING "last_task_id" AS "lastTaskId"
    `

    return range(lastTaskId - count + 1, lastTaskId + 1)
  }

  // Reads the workspace's serial id counter without bumping it, for callers that number their tasks
  // inline and write the counter forward with `bumpSerialIds` once the create lands.
  // Prefer `reserveSerialIdsTx` wherever a transaction is available: here the read and the bump are
  // separate statements, so two concurrent creates in the same workspace can read the same number
  // and collide on `@@unique([workspaceId, serialId])`.
  async getLastSerialId(workspaceId: number) {
    const { lastTaskId } = await this.prisma.workspace.findUniqueOrThrow({
      where: { id: workspaceId },
      select: { lastTaskId: true }
    })

    return lastTaskId
  }

  // Moves the workspace's serial id counter forward by `count`, for tasks numbered off a
  // `getLastSerialId` read. Written as `+ count` rather than an absolute set so a bump that landed
  // in between is carried forward instead of overwritten.
  // Raw for the same reason as `reserveSerialIdsTx` — `workspace.update` would rewrite `updatedAt`.
  async bumpSerialIds(workspaceId: number, count: number) {
    if (count < 1) return

    await this.prisma.$executeRaw`
      UPDATE "workspaces"
      SET "last_task_id" = "last_task_id" + ${count}
      WHERE "id" = ${workspaceId}
    `
  }

  async create(
    { tags, workspaceId, sourceId, assignees, context, ...dto }: CreateTaskDto,
    userId: number
  ) {
    const [notStartedStatus] = await this.findDefaultStatusInWorkspaces(workspaceId)

    const createdTask = await this.prisma.$transaction(async tx => {
      const [serialId] = await TaskService.reserveSerialIdsTx(tx, workspaceId)

      return await tx.task.create({
        data: {
          ...dto,
          serialId,
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
      })
    })

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
    return createdTask
  }

  static workspaceArchiveWhere(isArchived?: boolean): Prisma.TaskWhereInput {
    return {
      ...(isArchived === false && { archivedAt: null })
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
    })
  }

  async findInWorkspaceFormatted(workspace: WorkspaceWithPermissions, user: User, isArchived?: boolean) {
    const tasks = await this.findInWorkspace(workspace, isArchived)

    return tasks.flatMap(task => TaskService.formatAdditionalTaskFields(
      task,
      workspace,
      user,
      TaskService.getArchivedIdsMap(task.archivedWorkspaceAssigneeTask),
      isArchived
    ))
  }

  static formatTaskRowId(taskId: number, assigneeId?: number) {
    return `${taskId}${TaskService.TASK_ROW_ID_SEPARATOR}${assigneeId}`
  }

  static extractTaskToRows<TTask extends TaskInclude>(
    task: TTask,
    workspace: WorkspaceWithPermissions,
    user: User,
    onlyUserRows: boolean = false,
    archivedIds: Record<number, Date | undefined>,
    isArchived?: boolean,
  ) {
    const { assigneeStatuses, messages, status, ...taskFields } = task
    const activeAssignees = TaskService.filterByArchivedAssignee(task, archivedIds, isArchived)

    if (!activeAssignees) {
      return []
    }

    const fields = {
      ...taskFields,
      lastMessage: messages[0]
    }

    if (!onlyUserRows && assigneeStatuses.length === 0) {

      return [{
        ...fields,
        ...TaskService.formatAssigneeStatus(workspace, user, archivedIds, task.archivedAt),
        otherAssignees: [],
        rowKey: TaskService.formatTaskRowId(taskFields.id),
        status,
      }]
    }

    const formattedAssigneeStatuses = assigneeStatuses.map(
      assigneeStatus => TaskService.formatAssigneeStatus(workspace, user, archivedIds, task.archivedAt, assigneeStatus)
    )

    const activeAssigneeIds = new Set(activeAssignees.map(({ assigneeId }) => assigneeId))

    const formattedActiveAssignees = formattedAssigneeStatuses.filter(
      ({ assigneeId }) => assigneeId && activeAssigneeIds.has(assigneeId)
    )

    const assigneeStatusesForRows = onlyUserRows
      ? formattedActiveAssignees.filter(({ assignee }) => assignee?.users.some(({ id }) => id === user.id))
      : formattedActiveAssignees

    return assigneeStatusesForRows
      .map(({ assigneeId, statusId, taskId, ...assigneeStatusFields }) => ({
        ...fields,
        ...assigneeStatusFields,
        rowKey: TaskService.formatTaskRowId(taskFields.id, assigneeStatusFields?.assignee?.id),
        otherAssignees: formattedAssigneeStatuses.filter(current => current.assigneeId !== assigneeId)
      }))
  }

  async findRowsInWorkspace(workspace: WorkspaceWithPermissions, user: User, isArchived?: boolean) {
    const tasks = await this.findInWorkspace(workspace, isArchived)

    return tasks.map(task =>
      TaskService.extractTaskToRows(
        task,
        workspace,
        user,
        false,
        TaskService.getArchivedIdsMap(task.archivedWorkspaceAssigneeTask),
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
      // Extraction order - the user reviews and edits a source's tasks in the order the AI produced
      // them, so oldest first. Not TaskService.orderBy, which is newest first.
      orderBy: { id: 'asc' }
    })
  }

  async findFormattedBySource(sourceId: number, workspace: WorkspaceWithPermissions, user: User, isArchived?: boolean) {
    const tasks = await this.findBySource(sourceId, isArchived)

    return tasks.flatMap(task => TaskService.formatAdditionalTaskFields(
      task,
      workspace,
      user,
      TaskService.getArchivedIdsMap(task.archivedWorkspaceAssigneeTask),
      isArchived
    ))
  }

  async findPersonal(user: User) {
    return await this.prisma.task.findMany({
      where: {
        assigneeStatuses: {
          some: {
            assignee: {
              deletedAt: null,
              users: { some: { id: user.id } }
            }
          }
        },
        ...TaskService.commonWhere
      },
      include: {
        ...TaskService.withWorkspaceInclude(user.id),
        archivedUserAssigneeTask: { where: { userId: user.id } },
      },
      orderBy: TaskService.orderBy
    })
  }

  async findPersonalFormatted(user: User, isArchived?: boolean) {
    const tasks = await this.findPersonal(user)

    return tasks.flatMap(task => TaskService.formatAdditionalTaskFields(
      task,
      task.workspace,
      user,
      TaskService.getArchivedIdsMap(task.archivedUserAssigneeTask),
      isArchived
    ))
  }

  async findPersonalRows(user: User, isArchived?: boolean) {
    const tasks = await this.findPersonal(user)

    return tasks.flatMap(task =>
      TaskService.extractTaskToRows(
        task,
        task.workspace,
        user,
        true,
        TaskService.getArchivedIdsMap(task.archivedUserAssigneeTask),
        isArchived
      ).map(row => ({
        ...row,
        workspace: TaskService.formatTaskWorkspace(task.workspace, user)
      }))
    )
  }

  async findOne(id: number, user: User, isArchived?: boolean) {
    const task = await this.prisma.task.findUnique({
      where: { id, deletedAt: null },
      include: {
        ...TaskService.withWorkspaceInclude(user.id),
        archivedWorkspaceAssigneeTask: true
      }
    })

    if (!task) {
      return null
    }

    const [formatted] = TaskService.formatAdditionalTaskFields(
      task,
      task.workspace,
      user,
      TaskService.getArchivedIdsMap(task.archivedWorkspaceAssigneeTask),
      isArchived
    )

    return formatted ?? null
  }

  // A task is archived as a whole only while nobody is assigned to it
  static async clearWholeTaskArchiveTx(tx: Prisma.TransactionClient, taskId: number) {
    await tx.task.updateMany({
      where: { id: taskId, archivedAt: { not: null } },
      data: { archivedAt: null }
    })
  }

  static async detachAssigneesTx(tx: Prisma.TransactionClient, taskId: number, keptAssigneeIds: number[]) {
    // Counted on the assignees themselves, since the kept ones may not have a status row yet
    const keptAssignees = await tx.assignee.count({
      where: { id: { in: keptAssigneeIds }, deletedAt: null }
    })

    await ArchivedWorkspaceAssigneeService.detachArchivesTx(
      tx,
      { taskId, assigneeId: { notIn: keptAssigneeIds } },
      keptAssignees > 0
        ? undefined
        : {
          archivedAt: null,
          archivedWorkspaceAssigneeTask: { none: { assigneeId: { in: keptAssigneeIds } } }
        }
    )

    await tx.archivedUserAssigneeTask.deleteMany({
      where: { taskId, assigneeId: { notIn: keptAssigneeIds } }
    })
  }

  async update(
    { id, workspaceId }: Task,
    { assignees, tags, context, sourceId, statusId, ...dto }: UpdateTaskDto,
    updatedBy: number
  ) {
    const hasAssignees = assignees !== undefined && assignees.length > 0

    const [notStartedStatus] = hasAssignees
      ? await this.findDefaultStatusInWorkspaces(workspaceId)
      : [null]

    const status = statusId !== undefined
      ? { connect: { id: statusId } }
      : undefined

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

    return await this.prisma.$transaction(async tx => {
      if (assignees !== undefined) {
        await TaskService.detachAssigneesTx(tx, id, assignees.map(a => a.id))
      }

      return await tx.task.update({
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
          // A task is archived as a whole only while nobody is assigned to it
          ...(hasAssignees && { archivedAt: null }),
          ...(tags !== undefined && {
            tags: tagsSetOrCreateArgs(tags, workspaceId, updatedBy)
          }),
          updatedBy
        },
        include: TaskService.withWorkspaceInclude(updatedBy)
      })
    })
  }

  async remove(id: number, deletedBy: number) {
    return await this.prisma.task.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
      include: TaskService.withWorkspaceInclude(deletedBy)
    })
  }
}
