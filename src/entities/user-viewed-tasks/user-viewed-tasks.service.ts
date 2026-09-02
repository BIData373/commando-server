import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class UserViewedTasksService {
    constructor(private readonly prisma: PrismaService) { }

    async viewMessages(userId: number, taskId?: number, workspaceId?: number) {
        const now = new Date();

        if (taskId) {
            await this.prisma.userViewedTasks.upsert({
                where: { userId_taskId: { userId, taskId } },
                create: { userId, taskId, panelViewedAt: now },
                update: { panelViewedAt: now },
            });
        } else {
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

                await tx.userViewedTasks.updateMany({
                    where: { userId, taskId: { in: taskIds } },
                    data: { tableViewedAt: now },
                });

                await tx.userViewedTasks.createMany({
                    data: taskIds.map(taskId => ({ userId, taskId })),
                    skipDuplicates: true,
                });
            });
        }
    }
}
