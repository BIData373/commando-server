import { Injectable, OnModuleInit } from '@nestjs/common';
import { admin } from '../../common/consts/admin';
import { PrismaService } from '../../common/prisma.service';
import { ICreateUser, IUpdateUser, IUserInfo } from '../../types';
import { Prisma } from '../../types/prisma';

// FIX Add user search mirage function
@Injectable()
export class UserService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) { }

  async onModuleInit() {
    await this.upsert(admin);
  }

  static formatInfoForSave(info?: IUserInfo | null) {
    return (info as Readonly<IUserInfo>) ?? Prisma.JsonNull
  }

  async upsert({ upn, info }: ICreateUser) {
    const infoToSave = UserService.formatInfoForSave(info)

    return await this.prisma.user.upsert({
      where: { upn },
      create: { upn, info: infoToSave },
      update: { upn, info: infoToSave }
    })
  }

  async create({ upn, info }: ICreateUser) {
    return await this.prisma.user.create({
      data: {
        upn,
        info: UserService.formatInfoForSave(info)
      }
    });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: number, { upn, info }: IUpdateUser) {
    return await this.prisma.user.update({
      where: { id },
      data: {
        upn,
        info: UserService.formatInfoForSave(info)
      }
    });
  }

  async remove(id: number) {
    return await this.prisma.user.delete({ where: { id } });
  }
}
