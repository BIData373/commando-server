import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { CreateAssigneeDto } from './dto/request/create-assignee.dto';
import { UpdateAssigneeDto } from './dto/request/update-assignee.dto';

@Injectable()
export class AssigneeService {
  constructor(private readonly prisma: PrismaService) { }

  create(dto: CreateAssigneeDto, userId: number) {
    return this.prisma.assignee.create({
      data: {
        ...dto,
        createdBy: userId,
        updatedBy: userId
      }
    });
  }

  async findInWorkspace(workspaceId: number) {
    return await this.prisma.assignee.findMany({ where: { workspaceId } });
  }

  findAll() {
    return this.prisma.assignee.findMany({ where: { deletedAt: null } });
  }

  findOne(id: number) {
    return this.prisma.assignee.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateAssigneeDto, updatedBy: number) {
    return this.prisma.assignee.update({
      where: { id },
      data: { ...dto, updatedBy }
    });
  }

  remove(id: number, deletedBy: number) {
    return this.prisma.assignee.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
    });
  }
}
