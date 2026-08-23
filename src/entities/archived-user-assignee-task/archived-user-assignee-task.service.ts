import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class ArchivedUserAssigneeTaskService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }

  async toggle(taskId: number, userId: number, assigneeId?: number) {
    const { count } = await this.prisma.archivedUserAssigneeTask.deleteMany({
      where: { taskId, userId, assigneeId }
    })

    if (count === 0) {
      await this.prisma.archivedUserAssigneeTask.create({
        data: { taskId, userId, assigneeId },
      })
    }
  }
}
