import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Prisma } from '../../types/prisma';
import { TaskService } from '../task/task.service';
import { UpdateAssigneeTaskStatusDto } from './dto/request/update-assignee-task-status.dto';

@Injectable()
export class AssigneeTaskStatusService {
  static readonly include: Prisma.AssigneeTaskStatusInclude = {
    assignee: true,
    status: true,
    createdBy: true,
    updatedBy: true,
    task: { include: TaskService.baseInclude }
  }

  constructor(private readonly prisma: PrismaService) { }

  async findInTask(taskId: number) {
    return await this.prisma.assigneeTaskStatus.findMany({
      where: { taskId },
      include: { createdBy: true, updatedBy: true }
    });
  }

  async upsert({ taskId, assigneeId, context, ...dto }: UpdateAssigneeTaskStatusDto, userId: number) {
    return await this.prisma.$transaction(async tx => {
      await TaskService.clearWholeTaskArchiveTx(tx, taskId, userId)

      return await tx.assigneeTaskStatus.upsert({
        where: { taskId_assigneeId: { taskId, assigneeId } },
        create: { taskId, assigneeId, ...dto, createdById: userId, updatedById: userId },
        update: { taskId, assigneeId, ...dto, updatedById: userId },
        include: AssigneeTaskStatusService.include
      });
    })
  }

  async remove(taskId: number, assigneeId: number, updatedById: number) {
    return await this.prisma.$transaction(async tx => {
      const keptAssignees = await tx.assigneeTaskStatus.findMany({
        where: { taskId, assigneeId: { not: assigneeId } },
        select: { assigneeId: true }
      })

      await TaskService.detachAssigneesTx(tx, taskId, keptAssignees.map(a => a.assigneeId))

      // The removed status takes its updatedAt with it, so the task itself records the change
      await tx.task.update({
        where: { id: taskId },
        data: { updatedById }
      })

      return await tx.assigneeTaskStatus.delete({
        where: { taskId_assigneeId: { taskId, assigneeId } },
        include: { createdBy: true, updatedBy: true }
      });
    })
  }
}
