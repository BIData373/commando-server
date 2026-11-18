import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { GetUserViewDto } from './dto/request/get-user-view.dto';
import { UpsertUserViewDto } from './dto/request/upsert-user-view.dto';

@Injectable()
export class UserViewService {
  constructor(private readonly prisma: PrismaService) { }

  async upsert(userId: number, { workspaceId, device, view }: UpsertUserViewDto) {
    const existing = await this.prisma.userView.findFirst({
      where: { userId, workspaceId: workspaceId ?? null, device },
      select: { id: true },
    });

    if (existing) {
      const result = await this.prisma.userView.update({
        where: { id: existing.id },
        data: { view },
        select: { view: true },
      });
      return result.view;
    }

    const result = await this.prisma.userView.create({
      data: { userId, workspaceId: workspaceId ?? null, device, view },
      select: { view: true },
    });
    return result.view;
  }

  async findOne(userId: number, { device, workspaceId }: GetUserViewDto) {
    const result = await this.prisma.userView.findFirst({
      where: { userId, workspaceId: workspaceId ?? null, device },
      select: { view: true },
    });
    return result?.view;
  }
}
