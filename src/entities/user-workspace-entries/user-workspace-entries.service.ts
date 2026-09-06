import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class UserWorkspaceEntriesService {
  constructor(private readonly prisma: PrismaService) { }

  async updateUserEntrie(userId: number, workspaceId?: number) {
    const now = new Date()

    if (workspaceId) {
      await this.prisma.userWorkspaceEntries.upsert({
        where: { userId_workspaceId: { userId, workspaceId } },
        create: { userId, workspaceId, enteredAt: now },
        update: { enteredAt: now },
      })
    } else {
      await this.prisma.user.update({
        where: { id: userId },
        data: { personalAreaEnteredAt: now }
      })
    }
  }
}
