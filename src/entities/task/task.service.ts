import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Prisma } from '../../types/prisma';
import { CreateTaskDto } from './dto/request/create-task.dto';
import { UpdateTaskDto } from './dto/request/update-task.dto';

@Injectable()
export class TaskService {
  static readonly include: Prisma.TaskInclude = {
    source: true,
    tags: true,
    assigneeStatuses: true
  }

  constructor(private readonly prisma: PrismaService) { }

  create(dto: CreateTaskDto, userId: number) {
    return this.prisma.task.create({
      data: {
        ...dto,
        createdBy: userId,
        updatedBy: userId
      },
      include: TaskService.include
    });
  }

  async findInWorkspace(workspaceId: number) {
    return await this.prisma.task.findMany({
      where: { workspaceId, deletedAt: null },
      include: TaskService.include
    });
  }

  async findOne(id: number) {
    return await this.prisma.task.findUnique({
      where: { id },
      include: TaskService.include
    });
  }

  async update(id: number, dto: UpdateTaskDto, updatedBy: number) {
    return await this.prisma.task.update({
      where: { id },
      data: { ...dto, updatedBy },
      include: TaskService.include
    });
  }

  async remove(id: number, deletedBy: number) {
    return await this.prisma.task.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
      include: TaskService.include
    });
  }
}
