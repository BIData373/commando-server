import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Prisma } from '../../types/prisma';
import { CreatePikudDto } from './dto/request/create-pikud.dto';
import { UpdatePikudDto } from './dto/request/update-pikud.dto';

@Injectable()
export class PikudService {
  static readonly include = {
    createdBy: true,
    updatedBy: true,
    deletedBy: true
  } satisfies Prisma.PikudInclude;

  constructor(private readonly prisma: PrismaService) { }

  async create(dto: CreatePikudDto, userId: number) {
    return await this.prisma.pikud.create({
      data: {
        ...dto,
        createdById: userId,
        updatedById: userId
      },
      include: PikudService.include
    });
  }

  async findAll() {
    return await this.prisma.pikud.findMany({
      where: { deletedAt: null },
      include: PikudService.include
    });
  }

  async findOne(id: number) {
    return await this.prisma.pikud.findUnique({
      where: { id, deletedAt: null },
      include: PikudService.include
    });
  }

  async update(id: number, dto: UpdatePikudDto, updatedById: number) {
    return await this.prisma.pikud.update({
      where: { id },
      data: { ...dto, updatedById },
      include: PikudService.include
    });
  }

  async remove(id: number, deletedById: number) {
    return await this.prisma.pikud.update({
      where: { id },
      data: { deletedAt: new Date(), deletedById },
      include: PikudService.include
    });
  }
}
