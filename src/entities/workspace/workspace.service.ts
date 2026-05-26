import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { CreateWorkspaceDto } from './dto/request/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/request/update-workspace.dto';
import { WorkspaceDto } from './dto/response/workspace.dto';
import { Prisma, Workspace } from '../../types/prisma';
import { ModelFindFirstSelectArgs } from '../../common/decorators/entity-exists.decorator';

@Injectable()
export class WorkspaceService {
  constructor(private readonly prisma: PrismaService) { }

  create(dto: CreateWorkspaceDto, userId: number) {
    return this.prisma.workspace.create({
      data: {
        ...dto,
        createdBy: userId,
        updatedBy: userId
      }
    });
  }

  findAll(workspace?: WorkspaceDto, extraWhere?: Prisma.WorkspaceWhereInput) {
    return workspace
      ? [workspace]
      : this.prisma.workspace.findMany({
        where: {
          deletedAt: null,
          ...extraWhere
        }
      });
  }

  findOne(id: number) {
    return this.prisma.workspace.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateWorkspaceDto, updatedBy: number) {
    return this.prisma.workspace.update({
      where: { id },
      data: { ...dto, updatedBy }
    });
  }

  remove(id: number, deletedBy: number) {
    return this.prisma.workspace.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
    });
  }
}
