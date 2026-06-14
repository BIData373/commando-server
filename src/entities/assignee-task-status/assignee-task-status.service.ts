import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { PermissionType, Prisma } from '../../types/prisma';
import { UserDto } from '../user/dto/response/user.dto';
import { WorkspaceDto } from '../workspace/dto/response/workspace.dto';
import { UpdateAssigneeTaskStatusDto } from './dto/request/update-assignee-task-status.dto';
import { AssigneeStatusDto } from '../task/dto/response/assignee-status.dto';

export type AssigneeStatusEntity = Prisma.AssigneeTaskStatusGetPayload<{
  include: { assignee: { include: { users: true } }; status: true };
}>

export type WorkspaceWithPermissionsEntity = Prisma.WorkspaceGetPayload<{
  include: { permissions: true }
}>

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

  static formatAssigneeStatus(
    assigneeStatus: AssigneeStatusEntity,
    workspace: WorkspaceWithPermissionsEntity,
    user: UserDto,
  ) {
    const isManager = workspace.permissions[0]?.type === PermissionType.MANAGER || !!user.info?.isBI
    const isAssigned = assigneeStatus.assignee.users.some(u => u.id === user.id)
    const editable = (
      (workspace.assigneeStatusEditable && isAssigned) ||
      isManager
    )

    return {
      ...assigneeStatus,
      editable
    }
  }
}
