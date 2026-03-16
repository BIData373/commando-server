import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/prisma.service';
import { CreateSourceDto } from './dto/request/create-source.dto';
import { UpdateSourceDto } from './dto/request/update-source.dto';

@Injectable()
export class SourceService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateSourceDto) {
    return this.prisma.source.create({ data: dto });
  }

  findAll() {
    return this.prisma.source.findMany({ where: { deletedAt: null } });
  }

  findOne(id: number) {
    return this.prisma.source.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateSourceDto) {
    return this.prisma.source.update({ where: { id }, data: dto });
  }

  remove(id: number, deletedBy: number) {
    return this.prisma.source.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
    });
  }
}
