import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { isMatch } from 'lodash';
import * as https from 'node:https';
import { formatUpnForEntity } from '../../common/functions/user';
import { PrismaService } from '../../common/prisma.service';
import { Prisma } from '../../types/prisma';
import { CreateUserDto } from './dto/request/create-user.dto';
import { GetUserInfoDto } from './dto/request/get-user-info.dto';
import { UpdateUserDto } from './dto/request/update-user.dto';
import { MirageUserDto } from './dto/response/mirage-user.dto';
import { UserDto } from './dto/response/user.dto';
import { IMirageUser } from './interfaces/mirage-user.interface';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  async search(search: string): Promise<MirageUserDto[]> {
    const term = search.toLowerCase();

    let usersList: MirageUserDto[] = []

    if (process.env.MIRAGE_ENABLED === 'true') {
      const { data } = await axios.get<IMirageUser[]>(`${process.env.MIRAGE_URL}/users`, {
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        params: { search: term },
        headers: {
          'X-Mirage-Key': process.env.MIRAGE_KEY,
          'X-Mirage-Version': process.env.MIRAGE_VERSION,
          'Content-Type': 'application/json'
        }
      })

      usersList = data.map(({
        id,
        firstName,
        lastName,
        displayName
      }) => ({
        upn: formatUpnForEntity(id),
        info: {
          upn: formatUpnForEntity(id),
          name: (firstName || lastName) && `${firstName ?? ''}${lastName && ' '}${lastName ?? ' '}`,
          displayName
        }
      }))
    } else {
      const likeSearch = `%${term}%`
      usersList = await this.prisma.$queryRaw<UserDto[]>`
        SELECT *
        FROM users
        WHERE
          "upn" ILIKE ${likeSearch}
          OR "info"->>'name' ILIKE ${likeSearch}
          OR "info"->>'displayName' ILIKE ${likeSearch}
      ` satisfies UserDto[]
    }


    return usersList
  }

  static formatInfoForSave(info?: GetUserInfoDto | null) {
    return info
      ? {
        ...info,
        upn: formatUpnForEntity(info.upn)
      } as Readonly<GetUserInfoDto>
      : Prisma.JsonNull
  }

  static async upsertTx(tx: Prisma.TransactionClient, { upn, info }: CreateUserDto) {
    const infoToSave = UserService.formatInfoForSave(info)
    const strippedUpn = formatUpnForEntity(upn)

    const existing = await tx.user.findFirst({ where: { upn: strippedUpn } })
    if (existing && isMatch(existing.info as object, infoToSave)) {
      return existing
    }

    // Serialize concurrent upserts for the same stripped UPN
    // Lock is released when the transaction ends
    await tx.$executeRaw`SELECT pg_advisory_xact_lock(hashtext(${strippedUpn}))`

    const userToSave = {
      upn: strippedUpn,
      info: {
        ...(existing && typeof existing?.info === 'object'
          ? existing?.info
          : {}
        ),
        ...(info ? infoToSave : {})
      }
    }

    return existing
      ? await tx.user.update({ where: { id: existing.id }, data: userToSave })
      : await tx.user.create({ data: userToSave })
  }

  async upsert(dto: CreateUserDto) {
    return await this.prisma.$transaction(async tx => (
      await UserService.upsertTx(tx, dto)
    ))
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
