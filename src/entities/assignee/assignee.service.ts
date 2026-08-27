import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { Prisma } from '../../types/prisma';
import { CreateUserDto } from '../user/dto/request/create-user.dto';
import { UserService } from '../user/user.service';
import { CreateAssigneeDto } from './dto/request/create-assignee.dto';
import { UpdateAssigneeDto } from './dto/request/update-assignee.dto';

@Injectable()
export class AssigneeService {
  static readonly include: Prisma.AssigneeInclude = {
    users: true
  }

  static readonly includeMany: Prisma.AssigneeInclude = {
    ...AssigneeService.include,
    _count: {
      select: {
        taskStatuses: {
          where: {
            task: {
              deletedAt: null
            }
          }
        }
      }
    }
  }

  constructor(private readonly prisma: PrismaService) { }

  static async upsertUsersTx(tx: Prisma.TransactionClient, users: CreateUserDto[]) {
    const upsertedUsers = await Promise.all(
      users.map(async user => await UserService.upsertTx(tx, user))
    )

    return upsertedUsers.map(({ id }) => ({ id }))
  }

  async create(
    { context, users, ...dto }: CreateAssigneeDto,
    userId: number
  ) {
    return await this.prisma.$transaction(async tx => {
      return await tx.assignee.create({
        data: {
          ...dto,
          createdBy: userId,
          updatedBy: userId,
          ...(users.length > 0 && {
            users: {
              connect: await AssigneeService.upsertUsersTx(tx, users)
            }
          })
        },
        include: AssigneeService.include
      });
    })
  }

  async findInWorkspace(workspaceId: number) {
    return await this.prisma.assignee.findMany({
      where: { workspaceId, deletedAt: null },
      include: AssigneeService.includeMany
    })
  }

  async findOne(id: number) {
    return await this.prisma.assignee.findUnique({
      where: { id, deletedAt: null },
      include: AssigneeService.include
    });
  }

  async update(
    id: number,
    { users, ...dto }: UpdateAssigneeDto,
    updatedBy: number
  ) {
    return await this.prisma.$transaction(async tx => {
      return await tx.assignee.update({
        where: { id },
        data: {
          ...dto,
          updatedBy,
          ...(users && {
            users: {
              set: [],
              connect: await AssigneeService.upsertUsersTx(tx, users)
            }
          })
        },
        include: AssigneeService.include
      });
    })
  }

  async remove(id: number, deletedBy: number) {
    const searchAssignee = { where: { assigneeId: id } }

    const archivedWorkspaceAssignee = await this.prisma.archivedWorkspaceAssigneeTask.findMany(searchAssignee)
    if (archivedWorkspaceAssignee.length > 0) {
      const [archivedWorkspaceTask] = archivedWorkspaceAssignee

      const assigneeTasks = await this.prisma.assigneeTaskStatus.findMany({
        where: {
          taskId: archivedWorkspaceTask.taskId,
          assignee: { deletedAt: null }
        },
      })

      if (assigneeTasks.length > 1) {
        await this.prisma.archivedWorkspaceAssigneeTask.deleteMany(searchAssignee)
      } else {
        const updateAssignee = {
          ...searchAssignee,
          data: { assigneeId: null }
        }
        await this.prisma.archivedWorkspaceAssigneeTask.updateMany(updateAssignee)
      }
    }


    return await this.prisma.assignee.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
      include: AssigneeService.include
    })
  }
}
