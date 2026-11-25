import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Prisma } from '../../types/prisma';
import { AssigneeService } from '../assignee/assignee.service';
import { CreateAssigneeGroupDto } from './dto/request/create-assignee-group.dto';
import { UpdateAssigneeGroupDto } from './dto/request/update-assignee-group.dto';

@Injectable()
export class AssigneeGroupService {
  static readonly include = {
    assignees: {
      where: { deletedAt: null },
      include: AssigneeService.include
    },
    createdBy: true,
    updatedBy: true,
    deletedBy: true
  } satisfies Prisma.AssigneeGroupInclude;

  constructor(private readonly prisma: PrismaService) { }

  static connectAssignees(assigneeIds: number[]) {
    return assigneeIds.map(id => ({ id }));
  }

  async create(
    { context, assigneeIds, ...dto }: CreateAssigneeGroupDto,
    userId: number
  ) {
    return await this.prisma.assigneeGroup.create({
      data: {
        ...dto,
        ...(assigneeIds && {
          assignees: { connect: AssigneeGroupService.connectAssignees(assigneeIds) }
        }),
        createdById: userId,
        updatedById: userId
      },
      include: AssigneeGroupService.include
    });
  }

  async findInWorkspace(workspaceId: number) {
    return await this.prisma.assigneeGroup.findMany({
      where: { workspaceId, deletedAt: null },
      include: AssigneeGroupService.include
    });
  }

  async findOne(id: number) {
    return await this.prisma.assigneeGroup.findUnique({
      where: { id, deletedAt: null },
      include: AssigneeGroupService.include
    });
  }

  async update(
    id: number,
    { context, assigneeIds, ...dto }: UpdateAssigneeGroupDto,
    updatedById: number
  ) {
    return await this.prisma.assigneeGroup.update({
      where: { id },
      data: {
        ...dto,
        updatedById,
        ...(assigneeIds && {
          assignees: { set: AssigneeGroupService.connectAssignees(assigneeIds) }
        })
      },
      include: AssigneeGroupService.include
    });
  }

  async remove(id: number, deletedById: number) {
    return await this.prisma.assigneeGroup.update({
      where: { id },
      data: { deletedAt: new Date(), deletedById },
      include: AssigneeGroupService.include
    });
  }
}
