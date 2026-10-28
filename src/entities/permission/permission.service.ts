import { Injectable } from '@nestjs/common';
import { admin } from '../../common/consts/admin';
import { PrismaService } from '../../common/prisma.service';
import { PermissionType, Prisma, User } from '../../types/prisma';
import { UserWorkspaceVisitsService } from '../user-workspace-visits/user-workspace-visits.service';
import { UserInfoDto } from '../user/dto/response/user-info.dto';
import { UserService } from '../user/user.service';
import { UpsertPermissionDto } from './dto/request/upsert-permission.dto';

// FIX Add createdAt, updatedAt, createdBy, updatedBy?
@Injectable()
export class PermissionService {
  static readonly include: Prisma.PermissionInclude = {
    user: true
  }

  constructor(
    private readonly prisma: PrismaService,
    private readonly userWorkspaceVisitsService: UserWorkspaceVisitsService
  ) { }

  async hasPermission(userId: number, workspaceId: number, types: PermissionType[]) {
    const count = await this.prisma.permission.count({
      where: { userId, workspaceId, type: { in: types } }
    })

    return count > 0
  }

  async findInWorkspace(workspaceId: number) {
    const [permissions, visitedUserIds] = await Promise.all([
      this.prisma.permission.findMany({
        where: { workspaceId },
        include: PermissionService.include
      }),
      this.userWorkspaceVisitsService.findVisitedUserIds(workspaceId)
    ])

    return permissions.map(permission => ({
      ...permission,
      hasEnteredWorkspace: visitedUserIds.has(permission.userId)
    }))
  }

  async findOne(user: User, workspaceId: number) {
    const info = user.info as unknown as UserInfoDto

    return info.isBI
      ? { user, workspaceId, type: PermissionType.MANAGER, hasEnteredWorkspace: true }
      : await this.withHasEntered(await this.prisma.permission.findUnique({
        where: { userId_workspaceId: { userId: user.id, workspaceId } },
        include: PermissionService.include
      }));
  }

  async upsert({ upn, info, workspaceId, type }: UpsertPermissionDto) {
    return await this.prisma.$transaction(async tx => {
      const user = await UserService.upsertTx(tx, { upn, info })

      return await tx.permission.upsert({
        where: { userId_workspaceId: { userId: user.id, workspaceId } },
        create: { userId: user.id, workspaceId, type },
        update: { type },
        include: PermissionService.include
      });
    }).then(permission => this.withHasEntered(permission))
  }

  async remove(userId: number, workspaceId: number) {
    return await this.withHasEntered(await this.prisma.permission.delete({
      where: { userId_workspaceId: { userId, workspaceId } },
      include: PermissionService.include
    }));
  }

  private async withHasEntered<T extends { userId: number, workspaceId: number }>(permission: T | null) {
    return permission && {
      ...permission,
      hasEnteredWorkspace: await this.userWorkspaceVisitsService.hasVisited(permission.userId, permission.workspaceId)
    }
  }
}
