import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { UpsertUserViewsDto } from './dto/upsert-user-view.dto';

@Injectable()
export class UserViewsService {
  constructor(private readonly prisma: PrismaService) { }

  async upsert(userId: number, dto: UpsertUserViewsDto) {
    const workspaceId = dto.workspaceId ?? null;

    return this.prisma.userViews.upsert({
      where: workspaceId === null
        ? {
          userId,
        }
        : {
          userId_workspaceId: {
            userId,
            workspaceId,
          },
        },
      update: {
        view: dto.view,
      },
      create: {
        userId,
        workspaceId,
        view: dto.view,
      },
      select: {
        view: true
      }
    });
  }

  async findOne(userId: number, workspaceId?: number | null) {
    return this.prisma.userViews.findUnique({
      where:
        workspaceId == null
          ? {
            userId,
          }
          : {
            userId_workspaceId: {
              userId,
              workspaceId,
            },
          },
      select: {
        view: true
      }
    });
  }
}