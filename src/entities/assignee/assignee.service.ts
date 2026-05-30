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
          users: {
            connect: await AssigneeService.upsertUsersTx(tx, users)
          }
        },
        include: AssigneeService.include
      });
    })
  }

  async findInWorkspace(workspaceId: number) {
    return await this.prisma.assignee.findMany({
      where: { workspaceId, deletedAt: null },
      include: AssigneeService.include
    });
  }

  async findOne(id: number) {
    return await this.prisma.assignee.findUnique({
      where: { id, deletedAt: null },
      include: AssigneeService.include
    });
  }

  async update(
    id: number,
    { users, context, ...dto }: UpdateAssigneeDto,
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
    return await this.prisma.assignee.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy },
      include: AssigneeService.include
    });
  }
}
