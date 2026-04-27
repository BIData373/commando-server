import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { CreateTaskDto } from './dto/request/create-task.dto';
import { UpdateTaskDto } from './dto/request/update-task.dto';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) { }

  create(dto: CreateTaskDto, userId: number) {
    return this.prisma.task.create({
      data: {
        ...dto,
        createdBy: userId,
        updatedBy: userId
      }
    });
  }

  findAll() {
    return this.prisma.task.findMany({ where: { deletedAt: null } });
  }

  async findInWorkspace(workspaceId: number) {
    return await this.prisma.permission.findMany({ where: { workspaceId } });
  }

  findOne(id: number) {
    return this.prisma.task.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateTaskDto, updatedBy: number) {
    return this.prisma.task.update({
      where: { id },
      data: { ...dto, updatedBy }
    });
  }

  remove(id: number, deletedBy: number) {
    return this.prisma.task.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
    });
  }
}
