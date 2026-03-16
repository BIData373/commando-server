import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/prisma.service';
import { CreateMessageDto } from './dto/request/create-message.dto';
import { UpdateMessageDto } from './dto/request/update-message.dto';

@Injectable()
export class MessageService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateMessageDto) {
    return this.prisma.message.create({ data: dto });
  }

  findAll() {
    return this.prisma.message.findMany({ where: { deletedAt: null } });
  }

  findOne(id: number) {
    return this.prisma.message.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateMessageDto) {
    return this.prisma.message.update({ where: { id }, data: dto });
  }

  remove(id: number, deletedBy: number) {
    return this.prisma.message.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
    });
  }
}
