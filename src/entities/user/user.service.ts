import { Injectable, OnModuleInit } from '@nestjs/common';
import { admin } from '../../common/consts/admin';
import { PrismaService } from '../../common/prisma.service';
import { ICreateUser, IUpdateUser, IUser } from '../../types';
import { Prisma } from '../../types/prisma';

@Injectable()
export class UserService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) { }

  async onModuleInit(): Promise<void> {
    await this.upsert(admin);
  }

  static formatInfoForSave(info?: IUser | null) {
    return info ?? Prisma.JsonNull
  }

  async upsert({ upn, info }: ICreateUser) {
    const infoToSave = UserService.formatInfoForSave(info)

    return await this.prisma.user.upsert({
      where: { upn },
      create: { upn, info: infoToSave },
      update: { upn, info: infoToSave }
    })
  }

  create({ upn, info }: ICreateUser) {
    return this.prisma.user.create({
      data: {
        upn,
        info: UserService.formatInfoForSave(info)
      }
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, { upn, info }: IUpdateUser) {
    return this.prisma.user.update({
      where: { id },
      data: {
        upn,
        info: UserService.formatInfoForSave(info)
      }
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
