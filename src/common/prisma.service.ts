import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { PrismaClient } from '../types/prisma/client';
import { saveDatabaseCertificates } from './functions/ssl';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor(private readonly config: ConfigService) {
    const useSSL = (config.get<string>('DB_USE_SSL') ?? 'false') === 'true'
    if (useSSL) {
      saveDatabaseCertificates()
    }

    const cwd = process.cwd()

    // VERCEL ONLY
    const prismaUrl = config.get<string>('POSTGRES_PRISMA_URL')

    const adapter = new PrismaPg(prismaUrl
      ? { connectionString: prismaUrl }
      : {
        host: config.getOrThrow<string>('POSTGRES_HOST'),
        port: Number(config.getOrThrow<string>('PG_PORT')),
        user: config.getOrThrow<string>('PGUSER'),
        password: config.getOrThrow<string>('POSTGRES_PASSWORD'),
        database: config.getOrThrow<string>('POSTGRES_DATABASE'),
        ...(useSSL && {
          ssl: {
            cert: readFileSync(join(cwd, config.getOrThrow<string>('DB_SSLCERT_NAME'))),
            key: readFileSync(join(cwd, config.getOrThrow<string>('DB_SSLKEY_NAME'))),
            rejectUnauthorized: false
          }
        })
      })

    super({ adapter, errorFormat: 'minimal' })
  }

  async onModuleInit(): Promise<void> {
    await this.$connect()
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect()
  }
}
