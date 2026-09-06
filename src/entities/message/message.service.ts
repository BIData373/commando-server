import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Prisma } from '../../types/prisma';
import { CreateMessageDto } from './dto/request/create-message.dto';
import { UpdateMessageDto } from './dto/request/update-message.dto';

type MessageInclude = Prisma.MessageGetPayload<{
  include: { user: true, task: { select: { id: true } } }
}>

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
    const message = await this.viewedTaskModel(null, userId, taskId)
    return await message.findMany({
      where: { taskId, deletedAt: null },
      include: MessageService.include,
      orderBy: MessageService.orderBy,
    })
  }

  async findOne(id: number, userId: number) {
    const message = await this.viewedTaskModel(id, userId)
    return await message.findUnique({
      where: { id, deletedAt: null },
      include: MessageService.include
    })
  }

  async update(id: number, dto: UpdateMessageDto, updatedBy: number) {
    const message = await this.viewedTaskModel(id, updatedBy)
    return await message.update({
      where: { id },
      data: { ...dto, updatedBy },
      include: MessageService.include
    })
  }

  async remove(id: number, deletedBy: number) {
    const message = await this.viewedTaskModel(id, deletedBy);
    return await message.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
      include: MessageService.include
    })
  }

  private async viewedTaskModel(
    id: number | null,
    userId: number,
    taskId?: number
  ) {
    const viewedTask = await this.prisma.userViewedTasks.findFirst({
      where: {
        userId,
        task: (taskId ? { id: taskId } : { messages: { some: { id: id! } } })
      },
      select: { panelViewedAt: true }
    });

    const viewedAt = viewedTask?.panelViewedAt ?? null;
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
