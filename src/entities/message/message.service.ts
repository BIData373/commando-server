import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { CreateMessageDto } from './dto/request/create-message.dto';
import { UpdateMessageDto } from './dto/request/update-message.dto';

@Injectable()
export class MessageService {
  constructor(private readonly prisma: PrismaService) { }

  create(dto: CreateMessageDto, userId: number) {
    return this.prisma.message.create({
      data: {
        ...dto,
        createdBy: userId,
        updatedBy: userId
      }
    });
  }

  findAll() {
    return this.prisma.message.findMany({ where: { deletedAt: null } });
  }

  async findInTask(taskId: number) {
    return await this.prisma.message.findMany({ where: { taskId, deletedAt: null } });
  }

  findOne(id: number) {
    return this.prisma.message.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateMessageDto, updatedBy: number) {
    return this.prisma.message.update({
      where: { id },
      data: { ...dto, updatedBy }
    });
  }

  remove(id: number, deletedBy: number) {
    return this.prisma.message.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
    });
  }
}
