import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { CreateAssigneeTaskStatusDto } from './dto/request/create-assignee-task-status.dto';
import { UpdateAssigneeTaskStatusDto } from './dto/request/update-assignee-task-status.dto';
import { Prisma } from '../../types/prisma';

@Injectable()
export class AssigneeTaskStatusService {
  static readonly include: Prisma.AssigneeTaskStatusInclude = {
    assignee: true,
    status: true,
    task: true
  }

  constructor(private readonly prisma: PrismaService) { }

  create(dto: CreateAssigneeTaskStatusDto) {
    return this.prisma.assigneeTaskStatus.upsert({
      where: { taskId_assigneeId: { taskId: dto.taskId, assigneeId: dto.assigneeId } },
      create: dto,
      update: { statusId: dto.statusId },
    });
  }

  findAll() {
    return this.prisma.assigneeTaskStatus.findMany();
  }

  async findInTask(taskId: number) {
    return await this.prisma.assigneeTaskStatus.findMany({ where: { taskId } });
  }

  findOne(taskId: number, assigneeId: number) {
    return this.prisma.assigneeTaskStatus.findUnique({
      where: { taskId_assigneeId: { taskId, assigneeId } },
    });
  }

  upsert({ taskId, assigneeId, statusId }: UpdateAssigneeTaskStatusDto) {
    return this.prisma.assigneeTaskStatus.upsert({
      where: { taskId_assigneeId: { taskId, assigneeId } },
      create: { taskId, assigneeId, statusId },
      update: { taskId, assigneeId, statusId },
      include: AssigneeTaskStatusService.include
    });
  }

  remove(taskId: number, assigneeId: number) {
    return this.prisma.assigneeTaskStatus.delete({
      where: { taskId_assigneeId: { taskId, assigneeId } },
    });
  }
}
