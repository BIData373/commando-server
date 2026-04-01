import { Injectable, OnModuleInit } from '@nestjs/common';
import { admin } from '../../common/consts/admin';
import { PrismaService } from '../../common/prisma.service';
import { ICreateUser } from '../../types';
import { Prisma } from '../../types/prisma';
import { CreateUserDto } from './dto/request/create-user.dto';
import { UpdateUserDto } from './dto/request/update-user.dto';

@Injectable()
export class UserService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) { }

  async onModuleInit(): Promise<void> {
    await this.upsert(admin);
  }

  async upsert({ upn, info }: ICreateUser) {
    const infoToSave = info ?? Prisma.JsonNull

    return await this.prisma.user.upsert({
      where: { upn },
      create: { upn, info: infoToSave },
      update: { upn, info: infoToSave },
    })
  }

  create(dto: CreateUserDto) {
    return this.prisma.user.create({ data: dto });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data: dto });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
