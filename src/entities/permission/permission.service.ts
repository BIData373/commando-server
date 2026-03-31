import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { PermissionType } from '../../types/prisma';

// FIX Add createdAt, updatedAt, createdBy, updatedBy?
@Injectable()
export class PermissionService {
  constructor(private readonly prisma: PrismaService) { }

  async findInWorkspace(workspaceId: number) {
    return await this.prisma.permission.findMany({ where: { workspaceId } });
  }

  async findOne(userId: number, workspaceId: number) {
    return await this.prisma.permission.findUnique({
      where: { userId_workspaceId: { userId, workspaceId } },
    });
  }

  async upsert(upn: string, workspaceId: number, type: PermissionType) {
    return await this.prisma.$transaction(async prisma => {
      const user = await prisma.user.upsert({
        where: { upn },
        create: { upn },
        update: { upn }
      })

      return await prisma.permission.upsert({
        where: { userId_workspaceId: { userId: user.id, workspaceId } },
        create: { userId: user.id, workspaceId, type },
        update: { type }
      });
    })
  }

  async remove(userId: number, workspaceId: number) {
    return await this.prisma.permission.delete({
      where: { userId_workspaceId: { userId, workspaceId } },
    });
  }
}
