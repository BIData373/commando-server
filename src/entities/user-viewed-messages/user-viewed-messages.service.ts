import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class UserViewedMessagesService {
    constructor(private readonly prisma: PrismaService) { }

    async viewMessages(userId: number, taskId?: number, workspaceId?: number) {
        const now = new Date();
        
        if (taskId) {
            return await this.prisma.userViewedMessages.upsert({
                where: { userId_taskId: { userId, taskId } },
                create: { userId, taskId, viewedMessageAt: now },
                update: { viewedMessageAt: now },
            });
        }

        await this.prisma.$transaction(async (tx) => {
            const tasks = await tx.task.findMany({
                where: {
                    deletedAt: null,
                    ...(workspaceId
                        ? { workspaceId }
                        : {
                            assigneeStatuses: {
                                some: { assignee: { deletedAt: null, users: { some: { id: userId } } } }
                            }
                        }
                    )
                },
                select: { id: true }
            });
            const taskIds = tasks.map(t => t.id);

            await tx.userViewedMessages.updateMany({
                where: { userId, taskId: { in: taskIds } },
                data: { viewedTaskAt: now },
            });

            await tx.userViewedMessages.createMany({
                data: taskIds.map(taskId => ({ userId, taskId, viewedTaskAt: now })),
                skipDuplicates: true,
            });
        });
    }
}
