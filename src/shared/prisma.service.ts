import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '../../prisma/client'

import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor(private readonly config: ConfigService) {
    const host = config.getOrThrow<string>('PG_HOST')
    const port = config.getOrThrow<string>('PG_PORT')
    const username = config.getOrThrow<string>('PG_USERNAME')
    const password = config.getOrThrow<string>('PG_PASSWORD')
    const database = config.getOrThrow<string>('PG_DATABASE')

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
