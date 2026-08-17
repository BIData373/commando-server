import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Prisma } from '../../types/prisma';

@Injectable()
export class ArchivedWorkspaceAssigneeService {
  constructor(
    private readonly prismaService: PrismaService,
  ) { }

  async toggle(taskId: number, assigneeId?: number) {
    const existing = await this.prismaService.archivedWorkspaceAssigneeTask.findFirst({
      where: {
        taskId,
        assigneeId,
      }
    })

    if (existing) {
      await this.prismaService.archivedWorkspaceAssigneeTask.delete({
        where: { id: existing.id }
      })
    }

    else {
      await this.prismaService.archivedWorkspaceAssigneeTask.create({
        data: { taskId, assigneeId }
      })
    }
  }
}
