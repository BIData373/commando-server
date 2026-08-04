import { Injectable } from '@nestjs/common';
import { keyBy, map, uniq } from 'lodash';
import { PrismaService } from '../../common/prisma.service';
import { User } from '../../types/prisma';
import { TaskService } from '../task/task.service';

@Injectable()
export class ArchivedUserAssigneeTaskService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }

  async toggle(taskId: number, userId: number, assigneeId?: number) {
    const existing = await this.prisma.archivedUserAssigneeTask.findFirst({
      where: {
        taskId,
        userId,
        assigneeId,
      }
    })

    if (existing) {
      return await this.prisma.archivedUserAssigneeTask.delete({
        where: {
          id: existing.id
        },
        include: {
          task: true,
        }
      })
    }

    return await this.prisma.archivedUserAssigneeTask.create({ data: { taskId, userId, assigneeId } })
  }
}
