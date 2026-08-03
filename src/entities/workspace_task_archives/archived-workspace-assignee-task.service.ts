import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { User } from '../../types/prisma';
import { WorkspaceWithPermissions } from '../workspace/types/workspace-with-permission.type';
import { TaskService } from '../task/task.service';

@Injectable()
export class ArchivedWorkspaceAssigneeService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly tasksService: TaskService
  ) { }

  async findAll(workspace: WorkspaceWithPermissions, user: User) {
    const archivedTasks = await this.prismaService.workspaceTaskArchives.findMany({
      where: {
        task: {
          deletedAt: null,
          workspaceId: workspace.id,
        },
      },
      include: {
        task: {
          include: { ...TaskService.withWorkspaceInclude(user.id) }
        }
      },
    })

    const [defaultStatus] = await this.tasksService.findDefaultStatusInWorkspaces(workspace.id)

    return archivedTasks.flatMap(({ task, createdAt }) =>
      TaskService.extractTaskToRows(task, defaultStatus, workspace, user)
        .map((row) => ({
          ...row,
          workspace: TaskService.formatTaskWorkspace(row.workspace, user),
          archivedAt: createdAt,
        }))
    )
  }

  async toggle(taskId: number, assigneeId?: number) {
    const existing = await this.prismaService.workspaceTaskArchives.findFirst({
      where: {
        taskId,
        assigneeId,
      }
    })

    if (existing) {
      return await this.prismaService.workspaceTaskArchives.delete({
        where: {
          id: existing.id
        },
        include: {
          task: true,
        }
      })
    }

    return await this.prismaService.workspaceTaskArchives.create({ data: { taskId, assigneeId } })
  }
}
