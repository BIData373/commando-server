import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/prisma.service';
import { CreateTaskDto } from './dto/request/create-task.dto';
import { UpdateTaskDto } from './dto/request/update-task.dto';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateTaskDto) {
    return this.prisma.task.create({ data: dto });
  }

  findAll() {
    return this.prisma.task.findMany({ where: { deletedAt: null } });
  }

  findOne(id: number) {
    return this.prisma.task.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateTaskDto) {
    return this.prisma.task.update({ where: { id }, data: dto });
  }

  remove(id: number, deletedBy: number) {
    return this.prisma.task.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
    });
  }
}
