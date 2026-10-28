import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../common/prisma.service';
import { Prisma } from '../../types/prisma';
import { CreateMessageDto } from './dto/request/create-message.dto';
import { ListMessagesQueryDto } from './dto/request/list-messages-query.dto';

type MessageFilterHandlerFunction = () => Promise<Prisma.MessageGetPayload<typeof MessageService.findManyOptions>[]>

@Injectable()
export class MessageService {
  static readonly include = {
    user: true,
    createdBy: true,
    updatedBy: true,
    deletedBy: true
  } satisfies Prisma.MessageInclude;

  static readonly orderBy = {
    createdAt: 'desc'
  } satisfies Prisma.MessageOrderByWithRelationInput;

  static readonly findManyOptions = {
    include: MessageService.include,
    orderBy: MessageService.orderBy
  } satisfies Prisma.MessageFindManyArgs;

  constructor(private readonly prisma: PrismaService) { }

  async create({ context, ...dto }: CreateMessageDto, userId: number) {
    const message = await this.prisma.message.create({
      data: {
        ...dto,
        userId,
        createdById: userId,
        updatedById: userId
      },
      include: MessageService.include
    });

    const now = new Date()
    await this.prisma.userViewedTasks.upsert({
      where: { userId_taskId: { userId, taskId: dto.taskId } },
      create: { userId, taskId: dto.taskId },
      update: { viewedAt: now },
    });

    return { ...message, viewed: true }
  }

  async findMessagesByFilter({
    isArchived,
    ...dto
  }: ListMessagesQueryDto,
    userId: number
  ) {
    const handlers = {
      taskIds: () => this.findByTaskIds(dto.taskIds!, userId),
      workspaceId: () => this.findInWorkspace(dto.workspaceId!, isArchived),
      personal: () => this.findPersonal(userId, isArchived),
    } satisfies Record<keyof typeof dto, MessageFilterHandlerFunction>

    const keys = Object.keys(handlers) as (keyof typeof dto)[];
    const handlerKey = keys.find(k => Boolean(dto[k]));
    return handlerKey ? await handlers[handlerKey]() : [];
  }

  async findByTaskIds(taskIds: number[], userId: number,) {
    const message = await this.getIsMessageViewedExtension(null, userId, taskIds)
    return await message.findMany({
      where: { taskId: { in: taskIds }, deletedAt: null },
      ...MessageService.findManyOptions
    });
  }

  async findInWorkspace(workspaceId: number, isArchived?: boolean) {
    const archiveWhere: Prisma.TaskWhereInput = isArchived
      ? {
        OR: [
          { archivedAt: { not: null } },
          {
            archivedWorkspaceAssigneeTask: {
              some: {
                assignee: {
                  deletedAt: null
                }
              }
            }
          }
        ]
      }
      : { archivedAt: null };

    return await this.prisma.message.findMany({
      where: {
        deletedAt: null,
        task: {
          deletedAt: null,
          workspaceId,
          ...archiveWhere
        }
      },
      ...MessageService.findManyOptions
    });
  }

  async findPersonal(userId: number, isArchived?: boolean) {
    const archiveWhere: Prisma.TaskWhereInput = {
      archivedUserAssigneeTask: isArchived ?
        { some: { userId } } : { none: { userId } }
    };
    return await this.prisma.message.findMany({
      where: {
        deletedAt: null,
        task: {
          deletedAt: null,
          assigneeStatuses: {
            some: {
              assignee: {
                deletedAt: null,
                users: {
                  some: {
                    id: userId
                  }
                }
              }
            }
          },
          ...archiveWhere,
        }
      },
      ...MessageService.findManyOptions
    });
  }

  async findOne(id: number, userId: number) {
    const message = await this.getIsMessageViewedExtension(id, userId)
    return await message.findUnique({
      where: { id, deletedAt: null },
      include: MessageService.include
    })
  }


  async remove(id: number, deletedById: number) {
    return await this.updateMessage(id, deletedById, { deletedAt: new Date(), deletedById });
  }

  async updateMessage(id: number, userId: number, data: Prisma.MessageUncheckedUpdateInput) {
    const message = await this.getIsMessageViewedExtension(id, userId);
    return await message.update({
      where: { id },
      data,
      include: MessageService.include
    });
  }

  async getIsMessageViewedExtension(
    id: number | null,
    userId: number,
    taskIds?: number[]
  ) {
    const viewedTask = await this.prisma.userViewedTasks.findFirst({
      where: {
        userId,
        task: (taskIds ? { id: { in: taskIds } } : { messages: { some: { id: id! } } })
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
