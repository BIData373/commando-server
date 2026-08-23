import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class ArchivedWorkspaceAssigneeService {
  constructor(
    private readonly prismaService: PrismaService,
  ) { }

  async toggle(taskId: number, assigneeId?: number) {
    const { count } = await this.prismaService.archivedWorkspaceAssigneeTask.deleteMany({
      where: { taskId, assigneeId }
    })

    if (count === 0) {
      await this.prismaService.archivedWorkspaceAssigneeTask.create({
        data: { taskId, assigneeId }
      })
    }
  }
}
