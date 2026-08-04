import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class ArchivedWorkspaceAssigneeService {
  constructor(
    private readonly prismaService: PrismaService,
  ) { }


  async toggle(taskId: number, assigneeId?: number) {
    const existing = await this.prismaService.archivedWorkspaceTaskAssignee.findFirst({
      where: {
        taskId,
        assigneeId,
      }
    })

    if (existing) {
      return await this.prismaService.archivedWorkspaceTaskAssignee.delete({
        where: {
          id: existing.id
        },
        include: {
          task: true,
        }
      })
    }

    return await this.prismaService.archivedWorkspaceTaskAssignee.create({ data: { taskId, assigneeId } })
  }
}
