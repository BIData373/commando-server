import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { ICreateTag, IUpdateTag } from '../../types';

@Injectable()
export class TagService {
  constructor(private readonly prisma: PrismaService) { }

  async create(dto: ICreateTag, userId: number) {
    return await this.prisma.tag.create({
      data: {
        ...dto,
        createdBy: userId,
        updatedBy: userId
      }
    });
  }

  async findInWorkspace(workspaceId: number) {
    return await this.prisma.tag.findMany({ where: { workspaceId } });
  }

  async findOne(id: number) {
    return await this.prisma.tag.findUnique({ where: { id } });
  }

  async update(id: number, dto: IUpdateTag, updatedBy: number) {
    return await this.prisma.tag.update({
      where: { id },
      data: { ...dto, updatedBy }
    });
  }

  async remove(id: number) {
    return await this.prisma.tag.delete({ where: { id } });
  }
}
