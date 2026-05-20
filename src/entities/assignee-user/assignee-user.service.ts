import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { CreateAssigneeUserDto } from './dto/request/create-assignee-user.dto';

@Injectable()
export class AssigneeUserService {
  constructor(private readonly prisma: PrismaService) { }

  create(dto: CreateAssigneeUserDto) {
    return this.prisma.assigneeUser.create({ data: dto });
  }

  findAll() {
    return this.prisma.assigneeUser.findMany();
  }

  async findOne(assigneeId: number, userId: number) {
    return await this.prisma.assigneeUser.findUnique({
      where: { assigneeId_userId: { assigneeId, userId } },
    });
  }

  async findForAssignee(assigneeId: number) {
    return await this.prisma.assigneeUser.findMany({
      where: { assigneeId }
    });
  }

  remove(assigneeId: number, userId: number) {
    return this.prisma.assigneeUser.delete({
      where: { assigneeId_userId: { assigneeId, userId } },
    });
  }
}
