import { Injectable, OnModuleInit } from '@nestjs/common';
import { admin } from '../../common/consts/admin';
import { PrismaService } from '../../common/prisma.service';
import { Prisma } from '../../types/prisma';
import { CreateUserDto } from './dto/request/create-user.dto';
import { GetUserInfoDto } from './dto/request/get-user-info.dto';
import { UpdateUserDto } from './dto/request/update-user.dto';
import { UserDto } from './dto/response/user.dto';

const MOCK_USERS: UserDto[] = [
  { id: 1, upn: 's1111111@idf.il', info: { id: 1, upn: 's1111111@idf.il', name: 'Alice Johnson', displayName: 'Alice Johnson', isBI: false } },
  { id: 2, upn: 's1111112@idf.il', info: { id: 2, upn: 's1111112@idf.il', name: 'Bob Smith', displayName: 'Bob Smith', isBI: false } },
  { id: 3, upn: 's1111113@idf.il', info: { id: 3, upn: 's1111113@idf.il', name: 'Carol White', displayName: 'Carol White', isBI: false } },
  { id: 4, upn: 's1111114@idf.il', info: { id: 4, upn: 's1111114@idf.il', name: 'David Brown', displayName: 'David Brown', isBI: false } },
  { id: 5, upn: 's1111115@idf.il', info: { id: 5, upn: 's1111115@idf.il', name: 'Eva Martinez', displayName: 'Eva Martinez', isBI: false } },
  { id: 6, upn: 's1111116@idf.il', info: { id: 6, upn: 's1111116@idf.il', name: 'Frank Lee', displayName: 'Frank Lee', isBI: false } },
  { id: 7, upn: 's1111117@idf.il', info: { id: 7, upn: 's1111117@idf.il', name: 'Grace Kim', displayName: 'Grace Kim', isBI: false } },
  { id: 8, upn: 's1111118@idf.il', info: { id: 8, upn: 's1111118@idf.il', name: 'Henry Taylor', displayName: 'Henry Taylor', isBI: false } },
  { id: 9, upn: 's1111119@idf.il', info: { id: 9, upn: 's1111119@idf.il', name: 'Iris Chen', displayName: 'Iris Chen', isBI: false } },
  { id: 10, upn: 's1111110@idf.il', info: { id: 10, upn: 's1111110@idf.il', name: 'Jack Wilson', displayName: 'Jack Wilson', isBI: false } },
];

@Injectable()
export class UserService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) { }

  async onModuleInit() {
    await this.upsert(admin);
  }

  // FIX Implement mirage API
  async search(search: string): Promise<UserDto[]> {
    const term = search.toLowerCase();

    return MOCK_USERS.filter(({ upn, info }) => {
      const { name = '', displayName = '' } = (info as GetUserInfoDto) ?? {};
      return (
        upn.toLowerCase().includes(term) ||
        name.toLowerCase().includes(term) ||
        displayName.toLowerCase().includes(term)
      );
    });
  }

  static formatInfoForSave(info?: GetUserInfoDto | null) {
    return (info as Readonly<GetUserInfoDto>) ?? Prisma.JsonNull
  }

  static async upsertTx(tx: Prisma.TransactionClient, { upn, info }: CreateUserDto) {
    const infoToSave = UserService.formatInfoForSave(info)

    return await tx.user.upsert({
      where: { upn },
      create: { upn, info: infoToSave },
      update: { upn, info: infoToSave }
    })
  }

  async upsert(dto: CreateUserDto) {
    return await this.prisma.$transaction(async tx => await UserService.upsertTx(tx, dto))
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
