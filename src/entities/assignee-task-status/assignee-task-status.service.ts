import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { IUpdateAssigneeTaskStatus } from '../../types';
import { CreateAssigneeTaskStatusDto } from './dto/request/create-assignee-task-status.dto';

@Injectable()
export class AssigneeTaskStatusService {
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

  upsert({ taskId, assigneeId, statusId }: IUpdateAssigneeTaskStatus) {
    return this.prisma.assigneeTaskStatus.upsert({
      where: { taskId_assigneeId: { taskId, assigneeId } },
      create: { taskId, assigneeId, statusId },
      update: { taskId, assigneeId, statusId }
    });
  }

  remove(taskId: number, assigneeId: number) {
    return this.prisma.assigneeTaskStatus.delete({
      where: { taskId_assigneeId: { taskId, assigneeId } },
    });
  }
}
