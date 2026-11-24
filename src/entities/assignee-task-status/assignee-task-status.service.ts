import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Prisma, User } from '../../types/prisma';
import { SourceAttachmentService } from '../source-attachment/source-attachment.service';
import { TaskService } from '../task/task.service';
import { UpdateAssigneeTaskStatusDto } from './dto/request/update-assignee-task-status.dto';

@Injectable()
export class AssigneeTaskStatusService {
  static include(user: User) {
    return {
      assignee: true,
      status: true,
      createdBy: true,
      updatedBy: true,
      task: { include: TaskService.baseInclude(undefined, SourceAttachmentService.accessibleWhere(user)) }
    } satisfies Prisma.AssigneeTaskStatusInclude
  }

  constructor(private readonly prisma: PrismaService) { }

  async findInTask(taskId: number) {
    return await this.prisma.assigneeTaskStatus.findMany({
      where: { taskId },
      include: { createdBy: true, updatedBy: true }
    });
  }

  async upsert({ taskId, assigneeId, context, ...dto }: UpdateAssigneeTaskStatusDto, user: User) {
    return await this.prisma.$transaction(async tx => {
      await TaskService.clearWholeTaskArchiveTx(tx, taskId, user.id)

      return await tx.assigneeTaskStatus.upsert({
        where: { taskId_assigneeId: { taskId, assigneeId } },
        create: { taskId, assigneeId, ...dto, createdById: user.id, updatedById: user.id },
        update: { taskId, assigneeId, ...dto, updatedById: user.id },
        include: AssigneeTaskStatusService.include(user)
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
