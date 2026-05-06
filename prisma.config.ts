import { config } from 'dotenv';
import path from 'node:path';
import { defineConfig } from "prisma/config";

if (!process.env.ENV) {
  throw new Error('ENV was not passed!')
}

config({ path: path.join('./config', process.env.ENV, '.env') })

const host = process.env.PGHOST
const port = process.env.PG_PORT
const username = process.env.PGUSER
const password = process.env.PGPASSWORD
const database = process.env.POSTGRES_DATABASE

const url = `postgres://${username}:${password}@${host}:${port}/${database}`

console.log(port)

export default defineConfig({
  schema: "src/entities/",
  migrations: {
    path: "migrations/",
  },
  datasource: {
    url
  },
});
