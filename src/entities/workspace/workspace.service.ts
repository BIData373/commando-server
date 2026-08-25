import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Prisma, Workspace } from '../../types/prisma';
import { DEFAULT_STATUSES } from '../workspace-status/consts/default-statuses';
import { CreateWorkspaceDto } from './dto/request/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/request/update-workspace.dto';

@Injectable()
export class WorkspaceService {
  static readonly include = {
    createdBy: true,
    updatedBy: true,
    deletedBy: true
  } satisfies Prisma.WorkspaceInclude;

  constructor(
    private readonly prisma: PrismaService
  ) { }

  private permissionsInclude(userId: number): Prisma.WorkspaceInclude {
    return {
      ...WorkspaceService.include,
      permissions: {
        where: { userId },
        select: { type: true }
      }
    };
  }

  private sortByPermission<T extends { permissions: { type: string }[] }>(workspaces: T[]): T[] {
    const permissionOrder: Record<string, number> = { MANAGER: 0, VIEWER: 1 };

    return workspaces.sort((a, b) => {
      const aType = a.permissions[0]?.type;
      const bType = b.permissions[0]?.type;
      const aOrder = aType ? permissionOrder[aType] ?? 2 : 2;
      const bOrder = bType ? permissionOrder[bType] ?? 2 : 2;
      return aOrder - bOrder;
    });
  }

  static async createTx(
    tx: Prisma.TransactionClient,
    { context, ...dto }: CreateWorkspaceDto,
    userId: number
  ) {
    return await tx.workspace.create({
      data: {
        ...dto,
        createdById: userId,
        updatedById: userId,
        workspaceStatuses: {
          createMany: {
            data: DEFAULT_STATUSES
          }
        }
      },
      include: WorkspaceService.include
    });
  }

  async create(dto: CreateWorkspaceDto, userId: number) {
    return await WorkspaceService.createTx(this.prisma, dto, userId);
  }

  async findAll(userId: number, workspace?: Workspace, extraWhere?: Prisma.WorkspaceWhereInput) {
    if (workspace) return [workspace];

    const workspaces = await this.prisma.workspace.findMany({
      where: {
        deletedAt: null,
        ...extraWhere
      },
      include: this.permissionsInclude(userId)
    });

    return this.sortByPermission(workspaces);
  }

  async findPermitted(userId: number) {
    const workspaces = await this.prisma.workspace.findMany({
      where: {
        deletedAt: null,
        permissions: {
          some: {
            userId
          },
        },
      },
      include: this.permissionsInclude(userId)
    });

    return this.sortByPermission(workspaces);
  }

  async findOne(id: number) {
    return await this.prisma.workspace.findUnique({
      where: { id, deletedAt: null },
      include: WorkspaceService.include
    });
  }

  async update(id: number, { context, ...dto }: UpdateWorkspaceDto, updatedBy: number) {
    return await this.prisma.workspace.update({
      where: { id },
      data: { ...dto, updatedById: updatedBy },
      include: WorkspaceService.include
    });
  }

  async remove(id: number, deletedBy: number) {
    return await this.prisma.workspace.update({
      where: { id },
      data: { deletedAt: new Date(), deletedById: deletedBy },
      include: WorkspaceService.include
    });
  }
}
