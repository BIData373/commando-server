import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Prisma } from '../../types/prisma';
import { CreateWorkspaceDto } from './dto/request/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/request/update-workspace.dto';
import { WorkspaceDto } from './dto/response/workspace.dto';

@Injectable()
export class WorkspaceService {
  constructor(private readonly prisma: PrismaService) { }

  async create(dto: CreateWorkspaceDto, userId: number) {
    return await this.prisma.workspace.create({
      data: {
        ...dto,
        createdBy: userId,
        updatedBy: userId
      }
    });
  }

  async findAll(workspace?: WorkspaceDto, extraWhere?: Prisma.WorkspaceWhereInput) {
    return workspace
      ? [workspace]
      : await this.prisma.workspace.findMany({
        where: {
          deletedAt: null,
          ...extraWhere
        }
      });
  }

  async findOne(id: number) {
    return await this.prisma.workspace.findUnique({
      where: { id, deletedAt: null }
    });
  }

  async update(id: number, dto: UpdateWorkspaceDto, updatedBy: number) {
    return await this.prisma.workspace.update({
      where: { id },
      data: { ...dto, updatedBy }
    });
  }

  async remove(id: number, deletedBy: number) {
    return await this.prisma.workspace.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
    });
  }
}
