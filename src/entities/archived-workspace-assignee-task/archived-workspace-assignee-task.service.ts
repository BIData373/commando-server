import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../common/prisma.service'
import { Prisma } from '../../types/prisma'

@Injectable()
export class ArchivedWorkspaceAssigneeService {
  constructor(
    private readonly prismaService: PrismaService,
  ) { }

  static async detachArchivesTx(
    tx: Prisma.TransactionClient,
    where: Prisma.ArchivedWorkspaceAssigneeTaskWhereInput,
    losesArchive?: Prisma.TaskWhereInput
  ) {
    // Tasks left without any other archive row or assignee
    const losingTasks = losesArchive
      ? await tx.archivedWorkspaceAssigneeTask.findMany({
        where: { AND: [where, { task: losesArchive }] },
        select: { taskId: true },
        distinct: ['taskId']
      })
      : []

    // Each keeps its archive from the moment its earliest assignee archived it
    if (losingTasks.length > 0) {
      await tx.$executeRaw`
        UPDATE "tasks" t
        SET "archived_at" = (
            SELECT MIN(a."created_at")
            FROM "archived_workspace_assignee_task" a
            WHERE a."task_id" = t."id"
        )
        WHERE t."id" IN (${Prisma.join(losingTasks.map(({ taskId }) => taskId))})
      `
    }

    await tx.archivedWorkspaceAssigneeTask.deleteMany({ where })
  }

  static async toggleWholeTask(tx: Prisma.TransactionClient, taskId: number) {
    const { archivedAt } = await tx.task.findUniqueOrThrow({
      where: { id: taskId },
      select: { archivedAt: true }
    })

    await tx.task.update({
      where: { id: taskId },
      data: { archivedAt: archivedAt ? null : new Date() }
    })
  }

  static async toggleAssignee(tx: Prisma.TransactionClient, taskId: number, assigneeId: number) {
    const { count: unarchivedCount } = await tx.archivedWorkspaceAssigneeTask.deleteMany({
      where: { taskId, assigneeId }
    })

    if (unarchivedCount === 0) {
      await tx.archivedWorkspaceAssigneeTask.create({
        data: { taskId, assigneeId }
      })
    }
  }

  async toggle(taskId: number, assigneeId?: number) {
    await this.prismaService.$transaction(async tx => {
      return assigneeId
        ? await ArchivedWorkspaceAssigneeService.toggleAssignee(tx, taskId, assigneeId)
        : await ArchivedWorkspaceAssigneeService.toggleWholeTask(tx, taskId)
    })
  }
}
