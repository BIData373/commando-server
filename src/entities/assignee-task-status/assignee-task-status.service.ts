import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Prisma } from '../../types/prisma';
import { UpdateAssigneeTaskStatusDto } from './dto/request/update-assignee-task-status.dto';

@Injectable()
export class AssigneeTaskStatusService {
  static readonly include: Prisma.AssigneeTaskStatusInclude = {
    assignee: true,
    status: true,
    task: true
  }

  constructor(private readonly prisma: PrismaService) { }

  async findInTask(taskId: number) {
    return await this.prisma.assigneeTaskStatus.findMany({ where: { taskId } });
  }

  async upsert({ taskId, assigneeId, context, ...dto }: UpdateAssigneeTaskStatusDto) {
    return await this.prisma.assigneeTaskStatus.upsert({
      where: { taskId_assigneeId: { taskId, assigneeId } },
      create: { taskId, assigneeId, ...dto },
      update: { taskId, assigneeId, ...dto },
      include: AssigneeTaskStatusService.include
    });
  }

  async remove(taskId: number, assigneeId: number) {
    return await this.prisma.assigneeTaskStatus.delete({
      where: { taskId_assigneeId: { taskId, assigneeId } },
    });
  }
}
