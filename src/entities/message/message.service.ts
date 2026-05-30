import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Prisma } from '../../types/prisma';
import { CreateMessageDto } from './dto/request/create-message.dto';
import { UpdateMessageDto } from './dto/request/update-message.dto';

@Injectable()
export class MessageService {
  static readonly include: Prisma.MessageInclude = {
    user: true
  }

  constructor(private readonly prisma: PrismaService) { }

  async create(dto: CreateMessageDto, userId: number) {
    return await this.prisma.message.create({
      data: {
        ...dto,
        userId,
        createdBy: userId,
        updatedBy: userId
      },
      include: MessageService.include
    });
  }

  async findInTask(taskId: number) {
    return await this.prisma.message.findMany({
      where: { taskId, deletedAt: null },
      include: MessageService.include
    });
  }

  async findOne(id: number) {
    return await this.prisma.message.findUnique({
      where: { id, deletedAt: null },
      include: MessageService.include
    });
  }

  async update(id: number, dto: UpdateMessageDto, updatedBy: number) {
    return await this.prisma.message.update({
      where: { id },
      data: { ...dto, updatedBy },
      include: MessageService.include
    });
  }

  async remove(id: number, deletedBy: number) {
    return await this.prisma.message.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
      include: MessageService.include
    });
  }
}
