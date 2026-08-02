import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { UpsertUserViewDto } from './dto/request/upsert-user-view.dto';

@Injectable()
export class UserViewService {
  constructor(private readonly prisma: PrismaService) { }

  async upsert(userId: number, dto: UpsertUserViewDto): Promise<{ view: object }> {
    const workspaceId = dto.workspaceId ?? null;

    const existing = await this.prisma.userView.findFirst({
      where: { userId, workspaceId },
      select: { id: true },
    });

    if (existing) {
      return await this.prisma.userView.update({
        where: { id: existing.id },
        data: { view: dto.view },
        select: { view: true },
      }) as { view: object };
    }

    return await this.prisma.userView.create({
      data: { userId, workspaceId, view: dto.view },
      select: { view: true },
    }) as { view: object };
  }

  async findOne(userId: number, workspaceId?: number | null): Promise<{ view: object } | null> {
    return await this.prisma.userView.findFirst({
      where: { userId, workspaceId: workspaceId ?? null },
      select: { view: true },
    }) as { view: object } | null;
  }
}
