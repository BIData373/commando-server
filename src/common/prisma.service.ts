import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../types/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor(private readonly config: ConfigService) {
    const host = config.getOrThrow<string>('PGHOST')
    const port = config.getOrThrow<string>('PG_PORT')
    const username = config.getOrThrow<string>('PGUSER')
    const password = config.getOrThrow<string>('PGPASSWORD')
    const database = config.getOrThrow<string>('POSTGRES_DATABASE')

    const connectionString = `postgres://${username}:${password}@${host}:${port}/${database}`
    const adapter = new PrismaPg({ connectionString })

    super({ adapter })
  }

  async onModuleInit(): Promise<void> {
    await this.$connect()
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect()
  }
}
