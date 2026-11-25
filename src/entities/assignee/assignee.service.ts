import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../common/prisma.service'
import { Prisma } from '../../types/prisma'
import { ArchivedWorkspaceAssigneeService } from '../archived-workspace-assignee-task/archived-workspace-assignee-task.service'
import { CreateUserDto } from '../user/dto/request/create-user.dto'
import { UserService } from '../user/user.service'
import { CreateAssigneeDto } from './dto/request/create-assignee.dto'
import { UpdateAssigneeDto } from './dto/request/update-assignee.dto'
import { map } from 'lodash'

@Injectable()
export class AssigneeService {
  static readonly include = {
    users: { include: { user: true } },
    createdBy: true,
    updatedBy: true,
    deletedBy: true
  } satisfies Prisma.AssigneeInclude

  static readonly includeMany = {
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
  } satisfies Prisma.AssigneeInclude

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
    const statusEditable = context.workspace.assigneeStatusEditable && dto.statusEditable === true

    return await this.prisma.$transaction(async tx => {
      const upsertedUsers = (await AssigneeService.upsertUsersTx(tx, users)).map(({ id }) => ({
        userId: id,
        statusEditable
      }))

      return await tx.assignee.create({
        data: {
          ...dto,
          statusEditable,
          createdById: userId,
          updatedById: userId,
          ...(users.length > 0 && {
            users: {
              create: upsertedUsers
            }
          })
        },
        include: AssigneeService.include
      })
    })
  }

  async findInWorkspace(workspaceId: number) {
    return await this.prisma.assignee.findMany({
      where: { workspaceId, deletedAt: null },
      include: AssigneeService.includeMany,
      orderBy: [{ id: 'asc' }]
    })
  }

  async findOne(id: number) {
    return await this.prisma.assignee.findUnique({
      where: { id, deletedAt: null },
      include: AssigneeService.include
    })
  }

  async update(
    id: number,
    { users, ...dto }: UpdateAssigneeDto,
    updatedBy: number
  ) {
    return await this.prisma.$transaction(async tx => {
      const upsertedUsers = users && await AssigneeService.upsertUsersTx(tx, users)

      return await tx.assignee.update({
        where: { id },
        data: {
          ...dto,
          updatedById: updatedBy,
          ...(upsertedUsers && {
            users: {
              deleteMany: {
                userId: {
                  notIn: map(upsertedUsers, 'id')
                }
              },
              upsert: upsertedUsers.map(({ id: userId }, index) => ({
                where: {
                  assigneeId_userId: { assigneeId: id, userId }
                },
                create: {
                  userId,
                  statusEditable: users[index].statusEditable === true
                },
                update: {
                  statusEditable: users[index].statusEditable === true
                }
              }))
            }
          })
        },
        include: AssigneeService.include
      })
    })
  }

  async updateStatusEditable(
    assigneeId: number,
    statusEditable: boolean,
    updatedBy: number,
    userId?: number
  ) {
    await this.prisma.assignee.update({
      where: { id: assigneeId },
      data: {
        updatedById: updatedBy,
        ...(userId
          ? {
            users: {
              update: {
                where: { assigneeId_userId: { assigneeId, userId } },
                data: { statusEditable }
              }
            }
          }
          : { statusEditable })
      }
    })
  }

  static async detachArchivedTasksTx(tx: Prisma.TransactionClient, assigneeId: number) {
    await ArchivedWorkspaceAssigneeService.detachArchivesTx(
      tx,
      { assigneeId },
      {
        archivedAt: null,
        archivedWorkspaceAssigneeTask: { none: { assigneeId: { not: assigneeId } } },
        assigneeStatuses: {
          none: { assigneeId: { not: assigneeId }, assignee: { deletedAt: null } }
        }
      }
    )
  }

  async remove(id: number, deletedById: number) {
    return await this.prisma.$transaction(async tx => {
      await tx.archivedUserAssigneeTask.deleteMany({ where: { assigneeId: id } })

      await AssigneeService.detachArchivedTasksTx(tx, id)

      return await tx.assignee.update({
        where: { id },
        data: {
          deletedAt: new Date(),
          deletedById,
          assigneeGroups: { set: [] }
        },
        include: AssigneeService.include
      })
    })
  }
}
