import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Prisma, User } from '../../types/prisma';
import { CreateTaskDto } from './dto/request/create-task.dto';
import { UpdateTaskDto } from './dto/request/update-task.dto';

@Injectable()
export class TaskService {
  static readonly include: Prisma.TaskInclude = {
    source: true,
    tags: true,
    assigneeStatuses: true
  }

  static readonly includeWithWorkspace: Prisma.TaskInclude = {
    ...TaskService.include,
    workspace: true
  }

  constructor(private readonly prisma: PrismaService) { }

  async create(dto: CreateTaskDto, userId: number) {
    return await this.prisma.task.create({
      data: {
        ...dto,
        createdBy: userId,
        updatedBy: userId
      },
      include: TaskService.includeWithWorkspace
    });
  }

  async findInWorkspace(workspaceId: number) {
    return await this.prisma.task.findMany({
      where: { workspaceId, deletedAt: null },
      include: TaskService.include
    });
  }

  // FIX Implement
  async findPersonal(user: User) {
    return await this.prisma.task.findMany({
      where: {
        assigneeStatuses: { some: { assignee: { users: { some: { id: user.id } } } } },
        deletedAt: null
      },
      include: TaskService.includeWithWorkspace
    });
  }

  async findOne(id: number) {
    return await this.prisma.task.findUnique({
      where: { id, deletedAt: null },
      include: TaskService.includeWithWorkspace
    });
  }

  async update(id: number, dto: UpdateTaskDto, updatedBy: number) {
    return await this.prisma.task.update({
      where: { id },
      data: { ...dto, updatedBy },
      include: TaskService.includeWithWorkspace
    });
  }

  async remove(id: number, deletedBy: number) {
    return await this.prisma.task.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
      include: TaskService.includeWithWorkspace
    });
  }
}
