import { Injectable, OnModuleInit } from '@nestjs/common';
import { admin } from '../../common/consts/admin';
import { IUserInfo } from '../../common/interfaces/user-info.interface';
import { PrismaService } from '../../common/prisma.service';
import { Prisma } from '../../types/prisma';
import { CreateUserDto } from './dto/request/create-user.dto';
import { UpdateUserDto } from './dto/request/update-user.dto';

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

  async upsert({ upn, info }: CreateUserDto) {
    const infoToSave = UserService.formatInfoForSave(info)

    return await this.prisma.user.upsert({
      where: { upn },
      create: { upn, info: infoToSave },
      update: { upn, info: infoToSave }
    })
  }

  async create({ upn, info }: CreateUserDto) {
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

  async update(id: number, { upn, info }: UpdateUserDto) {
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
