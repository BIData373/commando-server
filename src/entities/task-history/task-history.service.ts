import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { CreateTaskHistoryDto } from './dto/request/create-task-history.dto';

@Injectable()
export class TaskHistoryService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateTaskHistoryDto) {
    return this.prisma.taskHistory.create({ data: dto });
  }

  findAll() {
    return this.prisma.taskHistory.findMany();
  }

  findOne(id: number) {
    return this.prisma.taskHistory.findUnique({ where: { id } });
  }
}
