import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class UserViewedTasksService {
    constructor(private readonly prisma: PrismaService) { }

    async viewTasks(userId: number, taskId: number) {
        await this.prisma.userViewedTasks.upsert({
            where: { userId_taskId: { userId, taskId } },
            create: { userId, taskId },
            update: { viewedAt: new Date() },
        });
    }

}
