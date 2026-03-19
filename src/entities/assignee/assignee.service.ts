import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { CreateAssigneeDto } from './dto/request/create-assignee.dto';
import { UpdateAssigneeDto } from './dto/request/update-assignee.dto';

@Injectable()
export class AssigneeService {
  constructor(private readonly prisma: PrismaService) { }

  create(dto: CreateAssigneeDto) {
    return this.prisma.assignee.create({ data: dto });
  }

  findAll() {
    return this.prisma.assignee.findMany({ where: { deletedAt: null } });
  }

  findOne(id: number) {
    return this.prisma.assignee.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateAssigneeDto) {
    return this.prisma.assignee.update({ where: { id }, data: dto });
  }

  remove(id: number, deletedBy: number) {
    return this.prisma.assignee.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
    });
  }
}
