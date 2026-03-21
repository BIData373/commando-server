import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { CreatePikudDto } from './dto/request/create-pikud.dto';
import { UpdatePikudDto } from './dto/request/update-pikud.dto';

@Injectable()
export class PikudService {
  constructor(private readonly prisma: PrismaService) { }

  create(dto: CreatePikudDto, userId: number) {
    return this.prisma.pikud.create({
      data: {
        ...dto,
        createdBy: userId,
        updatedBy: userId
      }
    });
  }

  findAll() {
    return this.prisma.pikud.findMany({ where: { deletedAt: null } });
  }

  findOne(id: number) {
    return this.prisma.pikud.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdatePikudDto, updatedBy: number) {
    return this.prisma.pikud.update({
      where: { id },
      data: { ...dto, updatedBy }
    });
  }

  remove(id: number, deletedBy: number) {
    return this.prisma.pikud.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
    });
  }
}
