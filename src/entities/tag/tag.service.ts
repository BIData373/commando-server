import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { CreateTagDto } from './dto/request/create-tag.dto';
import { UpdateTagDto } from './dto/request/update-tag.dto';

@Injectable()
export class TagService {
  constructor(private readonly prisma: PrismaService) { }

  async create(dto: CreateTagDto, userId: number) {
    return await this.prisma.tag.create({
      data: {
        ...dto,
        createdBy: userId,
        updatedBy: userId
      }
    });
  }

  async findInWorkspace(workspaceId: number) {
    return await this.prisma.permission.findMany({ where: { workspaceId } });
  }

  async findOne(id: number) {
    return await this.prisma.tag.findUnique({ where: { id } });
  }

  async update(id: number, dto: UpdateTagDto, updatedBy: number) {
    return await this.prisma.tag.update({
      where: { id },
      data: { ...dto, updatedBy }
    });
  }

  async remove(id: number) {
    return await this.prisma.tag.delete({ where: { id } });
  }
}
