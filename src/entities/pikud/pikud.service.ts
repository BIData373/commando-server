import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { CreatePikudDto } from './dto/request/create-pikud.dto';
import { UpdatePikudDto } from './dto/request/update-pikud.dto';

@Injectable()
export class PikudService {
  constructor(private readonly prisma: PrismaService) { }

  async create(dto: CreatePikudDto, userId: number) {
    return await this.prisma.pikud.create({
      data: {
        ...dto,
        createdBy: userId,
        updatedBy: userId
      }
    });
  }

  async findAll() {
    return await this.prisma.pikud.findMany({
      where: { deletedAt: null }
    });
  }

  async findOne(id: number) {
    return await this.prisma.pikud.findUnique({
      where: { id, deletedAt: null }
    });
  }

  async update(id: number, dto: UpdatePikudDto, updatedBy: number) {
    return await this.prisma.pikud.update({
      where: { id },
      data: { ...dto, updatedBy }
    });
  }

  async remove(id: number, deletedBy: number) {
    return await this.prisma.pikud.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
    });
  }
}
