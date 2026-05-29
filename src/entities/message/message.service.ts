import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { CreateMessageDto } from './dto/request/create-message.dto';
import { UpdateMessageDto } from './dto/request/update-message.dto';

@Injectable()
export class MessageService {
  constructor(private readonly prisma: PrismaService) { }

  async create(dto: CreateMessageDto, userId: number) {
    return await this.prisma.message.create({
      data: {
        ...dto,
        createdBy: userId,
        updatedBy: userId
      }
    });
  }

  async findInTask(taskId: number) {
    return await this.prisma.message.findMany({ where: { taskId, deletedAt: null } });
  }

  async findOne(id: number) {
    return await this.prisma.message.findUnique({ where: { id } });
  }

  async update(id: number, dto: UpdateMessageDto, updatedBy: number) {
    return await this.prisma.message.update({
      where: { id },
      data: { ...dto, updatedBy }
    });
  }

  async remove(id: number, deletedBy: number) {
    return await this.prisma.message.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
    });
  }
}
