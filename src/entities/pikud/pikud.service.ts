import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/prisma.service';
import { CreatePikudDto } from './dto/request/create-pikud.dto';
import { UpdatePikudDto } from './dto/request/update-pikud.dto';

@Injectable()
export class PikudService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreatePikudDto) {
    return this.prisma.pikud.create({ data: dto });
  }

  findAll() {
    return this.prisma.pikud.findMany({ where: { deletedAt: null } });
  }

  findOne(id: number) {
    return this.prisma.pikud.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdatePikudDto) {
    return this.prisma.pikud.update({ where: { id }, data: dto });
  }

  remove(id: number, deletedBy: number) {
    return this.prisma.pikud.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
    });
  }
}
