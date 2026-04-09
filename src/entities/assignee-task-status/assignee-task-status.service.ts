import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { CreateAssigneeTaskStatusDto } from './dto/request/create-assignee-task-status.dto';
import { UpdateAssigneeTaskStatusDto } from './dto/request/update-assignee-task-status.dto';

@Injectable()
export class AssigneeTaskStatusService {
  constructor(private readonly prisma: PrismaService) {}

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

  findOne(taskId: number, assigneeId: number) {
    return this.prisma.assigneeTaskStatus.findUnique({
      where: { taskId_assigneeId: { taskId, assigneeId } },
    });
  }

  update(taskId: number, assigneeId: number, dto: UpdateAssigneeTaskStatusDto) {
    return this.prisma.assigneeTaskStatus.update({
      where: { taskId_assigneeId: { taskId, assigneeId } },
      data: dto,
    });
  }

  remove(taskId: number, assigneeId: number) {
    return this.prisma.assigneeTaskStatus.delete({
      where: { taskId_assigneeId: { taskId, assigneeId } },
    });
  }
}
