import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Prisma } from '../../types/prisma';
import { CreateSourceDto } from './dto/request/create-source.dto';
import { UpdateSourceDto } from './dto/request/update-source.dto';

@Injectable()
export class SourceService {
  static readonly include: Prisma.SourceInclude = {
    tags: true
  }

  constructor(private readonly prisma: PrismaService) { }

  create({ tags, workspaceId, ...dto }: CreateSourceDto, userId: number) {
    return this.prisma.source.create({
      data: {
        ...dto,
        workspaceId,
        tags: {
          connectOrCreate: tags.map(name => ({
            create: {
              name,
              workspaceId,
              createdBy: userId,
              updatedBy: userId
            },
            // FIX Check if name is unique, and use it here if so
            where: { id: 1 }
          }))
        },
        createdBy: userId,
        updatedBy: userId
      },
      include: SourceService.include
    });
  }

  async findInWorkspace(workspaceId: number) {
    return await this.prisma.source.findMany({
      where: { workspaceId, deletedAt: null },
      include: SourceService.include
    });
  }

  async findOne(id: number) {
    return await this.prisma.source.findUnique({
      where: { id, deletedAt: null },
      include: SourceService.include
    });
  }

  async update(id: number, dto: UpdateSourceDto, updatedBy: number) {
    return await this.prisma.source.update({
      where: { id },
      data: { ...dto, updatedBy },
      include: SourceService.include
    });
  }

  async remove(id: number, deletedBy: number) {
    return await this.prisma.source.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
      include: SourceService.include
    });
  }
}
