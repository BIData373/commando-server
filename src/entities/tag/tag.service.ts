import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { CreateTagDto } from './dto/request/create-tag.dto';
import { UpdateTagDto } from './dto/request/update-tag.dto';

@Injectable()
export class TagService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateTagDto) {
    return this.prisma.tag.create({ data: dto });
  }

  findAll() {
    return this.prisma.tag.findMany();
  }

  findOne(id: number) {
    return this.prisma.tag.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateTagDto) {
    return this.prisma.tag.update({ where: { id }, data: dto });
  }

  remove(id: number) {
    return this.prisma.tag.delete({ where: { id } });
  }
}
