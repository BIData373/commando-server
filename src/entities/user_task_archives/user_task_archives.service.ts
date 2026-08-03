import { Injectable } from '@nestjs/common';
import { User } from '../../types/prisma';
import { PrismaService } from '../../common/prisma.service';
import { TaskService, TaskWithWorkspaceInclude } from '../task/task.service';
import { keyBy, map, uniq } from 'lodash';

@Injectable()
export class UserTaskArchivesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly taskService: TaskService
  ) { }

  async findAll(user: User) {
    const arhivedTasks = await this.prisma.userTaskArchives.findMany({
      where: {
        userId: user.id,
        task: {
          deletedAt: null,
        },
      },
      include: {
        task: {
          include: { ...TaskService.withWorkspaceInclude(user.id) },
        },
      },
    })

    const tasks = arhivedTasks.map((archive) => archive.task)
    const workspaceIds = uniq(map(tasks, 'workspaceId'))
    const defaultStatuses = await this.taskService.findDefaultStatusInWorkspaces(...workspaceIds)
    const defaultStatusesMap = keyBy(defaultStatuses, 'workspaceId')

    return arhivedTasks.flatMap(({ task, createdAt }) =>
      TaskService.extractTaskToRows(task, defaultStatusesMap[task.workspace.id], task.workspace, user)
        .map((row) => ({
          task: { ...row, workspace: TaskService.formatTaskWorkspace(row.workspace, user) },
          createdAt,
        }))
    )
  }

  async toggle(taskId: number, userId: number, assigneeId?: number) {
    const existing = await this.prisma.userTaskArchives.findFirst({
      where: {
        taskId,
        userId,
        assigneeId,
      }
    })

    if (existing) {
      return await this.prisma.userTaskArchives.delete({
        where: {
          id: existing.id
        },
        include: {
          task: true,
        }
      })
    }

    return await this.prisma.userTaskArchives.create({ data: { taskId, userId, assigneeId } })
  }
}
