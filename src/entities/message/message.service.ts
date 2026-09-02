import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../common/prisma.service';
import { Prisma } from '../../types/prisma';
import { CreateMessageDto } from './dto/request/create-message.dto';
import { ListMessagesQueryDto } from './dto/request/list-messages-query.dto';
import { UpdateMessageDto } from './dto/request/update-message.dto';

@Injectable()
export class MessageService {
  static readonly include = {
    user: true
  } satisfies Prisma.MessageInclude;

  static readonly orderBy = {
    createdAt: 'desc'
  } satisfies Prisma.MessageOrderByWithRelationInput;

  static readonly findManyOptions = {
    include: MessageService.include,
    orderBy: MessageService.orderBy
  };

  constructor(private readonly prisma: PrismaService) { }

  async create({ context, ...dto }: CreateMessageDto, userId: number) {
    return await this.prisma.message.create({
      data: {
        ...dto,
        userId,
        createdBy: userId,
        updatedBy: userId
      },
      include: MessageService.include
    });
  }

  async findInTask(taskId: number) {
    return await this.prisma.message.findMany({
      where: { taskId, deletedAt: null },
      ...MessageService.findManyOptions
    });
  }

  async findMessagesByFilter({
    taskId,
    taskIds,
    workspaceId,
    personal,
    isArchived
  }: ListMessagesQueryDto,
    userId: number
  ) {
    if (taskId) {
      return await this.findInTask(taskId);
    }
    if (taskIds) {
      return await this.findByTaskIds(taskIds);
    }
    if (workspaceId) {
      return await this.findInWorkspace(workspaceId, isArchived);
    }
    if (personal) {
      return await this.findPersonal(userId, isArchived);
    }
    return [];
  }

  async findByTaskIds(taskIds: number[]) {
    return await this.prisma.message.findMany({
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
    const archiveWhere: Prisma.TaskWhereInput = isArchived
      ? { archivedUserAssigneeTask: { some: { userId } } }
      : { archivedUserAssigneeTask: { none: { userId } } };

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

  async findOne(id: number) {
    return await this.prisma.message.findUnique({
      where: { id, deletedAt: null },
      include: MessageService.include
    });
  }

  async update(id: number, dto: UpdateMessageDto, updatedBy: number) {
    return await this.prisma.message.update({
      where: { id },
      data: { ...dto, updatedBy },
      include: MessageService.include
    });
  }

  async remove(id: number, deletedBy: number) {
    return await this.prisma.message.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
      include: MessageService.include
    });
  }
}
