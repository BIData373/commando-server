import { config } from 'dotenv';
import path from 'node:path';
import { defineConfig } from "prisma/config";

if (!process.env.ENV) {
  throw new Error('ENV was not passed!')
}

config({ path: path.join('./config', process.env.ENV, '.env') })

const url = process.env.DATABASE_URL

export default defineConfig({
  schema: "src/entities/",
  migrations: {
    path: "migrations/",
  },
  datasource: {
    url
  },
});
