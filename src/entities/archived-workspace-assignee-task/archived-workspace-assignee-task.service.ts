import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class ArchivedWorkspaceAssigneeService {
  constructor(
    private readonly prismaService: PrismaService,
  ) { }

  async toggle(taskId: number, assigneeId?: number) {
    await this.prismaService.$transaction(async tx => {
      const { count } = await tx.archivedWorkspaceAssigneeTask.deleteMany({
        where: { taskId, assigneeId }
      })

      if (count === 0) {
        await tx.archivedWorkspaceAssigneeTask.create({
          data: { taskId, assigneeId }
        })
      }
    })
  }
}
