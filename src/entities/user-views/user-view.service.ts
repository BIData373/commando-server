import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { UpsertUserViewDto } from './dto/request/upsert-user-view.dto';

@Injectable()
export class UserViewService {
  constructor(private readonly prisma: PrismaService) { }

  async upsert(userId: number, dto: UpsertUserViewDto) {
    const workspaceId = dto.workspaceId ?? null;

    const existing = await this.prisma.userView.findFirst({
      where: { userId, workspaceId },
      select: { id: true },
    });

    if (existing) {
      const result = await this.prisma.userView.update({
        where: { id: existing.id },
        data: { view: dto.view },
        select: { view: true },
      });
      return result.view;
    }

    const result = await this.prisma.userView.create({
      data: { userId, workspaceId, view: dto.view },
      select: { view: true },
    });
    return result.view;
  }

  async findOne(userId: number, workspaceId?: number | null) {
    const result = await this.prisma.userView.findFirst({
      where: { userId, workspaceId: workspaceId ?? null },
      select: { view: true },
    });
    return result?.view;
  }
}
