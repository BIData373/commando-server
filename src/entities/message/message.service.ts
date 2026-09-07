import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Prisma } from '../../types/prisma';
import { CreateMessageDto } from './dto/request/create-message.dto';
import { UpdateMessageDto } from './dto/request/update-message.dto';

@Injectable()
export class MessageService {
  static readonly include = {
    user: true,
    task: { select: { id: true } }
  } satisfies Prisma.MessageInclude;

  static readonly orderBy = {
    createdAt: 'desc'
  } satisfies Prisma.MessageOrderByWithRelationInput;

  constructor(private readonly prisma: PrismaService) { }

  async create({ context, ...dto }: CreateMessageDto, userId: number) {
    const message = await this.prisma.message.create({
      data: {
        ...dto,
        userId,
        createdBy: userId,
        updatedBy: userId
      },
      include: MessageService.include
    });

    const now = new Date()
    await this.prisma.userViewedTasks.upsert({
      where: { userId_taskId: { userId, taskId: dto.taskId } },
      create: { userId, taskId: dto.taskId, panelViewedAt: now },
      update: { panelViewedAt: now },
    });

    return { ...message, viewed: true }
  }

  async findInTask(taskId: number, userId: number) {
    const message = await this.markTaskAsViewed(null, userId, taskId)
    return await message.findMany({
      where: { taskId, deletedAt: null },
      include: MessageService.include,
      orderBy: MessageService.orderBy,
    })
  }

  async findOne(id: number, userId: number) {
    const message = await this.markTaskAsViewed(id, userId)
    return await message.findUnique({
      where: { id, deletedAt: null },
      include: MessageService.include
    })
  }

  async update(id: number, dto: UpdateMessageDto, updatedBy: number) {
    return await this.updateMessage(id, updatedBy, { ...dto, updatedBy });
  }

  async remove(id: number, deletedBy: number) {
    return await this.updateMessage(id, deletedBy, { deletedAt: new Date(), deletedBy });
  }

  async updateMessage(id: number, userId: number, data: Prisma.MessageUpdateInput) {
    const message = await this.markTaskAsViewed(id, userId);
    return await message.update({
      where: { id },
      data,
      include: MessageService.include
    });
  }

  private async markTaskAsViewed(
    id: number | null,
    userId: number,
    taskId?: number
  ) {
    const viewedTask = await this.prisma.userViewedTasks.findFirst({
      where: {
        userId,
        task: (taskId ? { id: taskId } : { messages: { some: { id: id! } } })
      },
      select: { viewedAt: true }
    });

    const viewedAt = viewedTask?.viewedAt ?? null;
    return this.prisma.$extends({
      result: {
        message: {
          viewed: {
            needs: { createdAt: true },
            compute: (msg) => viewedAt !== null && viewedAt >= msg.createdAt,
          }
        }
      }
    }).message
  }
}
