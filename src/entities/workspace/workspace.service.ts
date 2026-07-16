import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Prisma } from '../../types/prisma';
import { DEFAULT_STATUSES } from '../workspace-status/consts/default-statuses';
import { CreateWorkspaceDto } from './dto/request/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/request/update-workspace.dto';
import { WorkspaceDto } from './dto/response/workspace.dto';

@Injectable()
export class WorkspaceService {
  constructor(private readonly prisma: PrismaService) { }

  async create({ context, ...dto }: CreateWorkspaceDto, userId: number) {
    return await this.prisma.workspace.create({
      data: {
        ...dto,
        createdBy: userId,
        updatedBy: userId,
        workspaceStatuses: {
          createMany: {
            data: DEFAULT_STATUSES
          }
        }
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

  async findUserWorkspaces(userId: number) {
    const workspaces = await this.prisma.workspace.findMany({
      where: {
        deletedAt: null,
        permissions: {
          some: {
            userId
          },
        },
      },
      include: {
        permissions: {
          where: {
            userId
          },
          select: {
            type: true
          }
        }
      }
    })
    return workspaces.map(({ permissions, ...workspace }) => ({
      ...workspace,
      permissionType: permissions[0].type
    }))
  }

  async findOne(id: number) {
    return await this.prisma.workspace.findUnique({
      where: { id, deletedAt: null }
    });
  }

  async update(id: number, { context, ...dto }: UpdateWorkspaceDto, updatedBy: number) {
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
