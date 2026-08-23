import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class ArchivedUserAssigneeTaskService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }

  async toggle(taskId: number, userId: number, assigneeId?: number) {
    await this.prisma.$transaction(async tx => {
      const { count } = await tx.archivedUserAssigneeTask.deleteMany({
        where: { taskId, userId, assigneeId }
      })

      if (count === 0) {
        await tx.archivedUserAssigneeTask.create({
          data: { taskId, userId, assigneeId },
        })
      }
    })
  }
}
