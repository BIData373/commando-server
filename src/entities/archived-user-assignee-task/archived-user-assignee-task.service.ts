import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

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
      await this.prisma.archivedUserAssigneeTask.delete({
        where: { id: existing.id },
      })
    }

    else {
      await this.prisma.archivedUserAssigneeTask.create({
        data: { taskId, userId, assigneeId },
      })
    }
  }
}
