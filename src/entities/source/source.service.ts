import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { CreateSourceDto } from './dto/request/create-source.dto';
import { UpdateSourceDto } from './dto/request/update-source.dto';

@Injectable()
export class SourceService {
  constructor(private readonly prisma: PrismaService) { }

  create(dto: CreateSourceDto, userId: number) {
    return this.prisma.source.create({
      data: {
        ...dto,
        createdBy: userId,
        updatedBy: userId
      }
    });
  }

  async findInWorkspace(workspaceId: number) {
    return await this.prisma.source.findMany({ where: { workspaceId } });
  }

  findAll() {
    return this.prisma.source.findMany({ where: { deletedAt: null } });
  }

  findOne(id: number) {
    return this.prisma.source.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateSourceDto, updatedBy: number) {
    return this.prisma.source.update({
      where: { id },
      data: { ...dto, updatedBy }
    });
  }

  remove(id: number, deletedBy: number) {
    return this.prisma.source.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
    });
  }
}
