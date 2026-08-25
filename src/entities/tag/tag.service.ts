import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Prisma } from '../../types/prisma';
import { CreateTagDto } from './dto/request/create-tag.dto';
import { UpdateTagDto } from './dto/request/update-tag.dto';

@Injectable()
export class TagService {
  static readonly include = {
    createdBy: true,
    updatedBy: true
  } satisfies Prisma.TagInclude;

  constructor(private readonly prisma: PrismaService) { }

  async create(dto: CreateTagDto, userId: number) {
    return await this.prisma.tag.create({
      data: {
        ...dto,
        createdById: userId,
        updatedById: userId
      },
      include: TagService.include
    });
  }

  async findInWorkspace(workspaceId: number) {
    return await this.prisma.tag.findMany({
      where: { workspaceId },
      include: TagService.include
    });
  }

  async findOne(id: number) {
    return await this.prisma.tag.findUnique({
      where: { id },
      include: TagService.include
    });
  }

  async update(id: number, dto: UpdateTagDto, updatedBy: number) {
    return await this.prisma.tag.update({
      where: { id },
      data: { ...dto, updatedById: updatedBy },
      include: TagService.include
    });
  }

  async remove(id: number) {
    return await this.prisma.tag.delete({ where: { id } });
  }
}
