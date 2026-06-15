import { config } from 'dotenv';
import path from 'node:path';
import { defineConfig } from "prisma/config";
import { addIdentityPath } from './src/common/functions/ssl';

// allow build to happen without issues
if (process.env.ENV) {
  config({ path: path.join('./config', process.env.ENV, '.env') })
}

const useSSL = process.env.DB_USE_SSL === 'true'
const databaseUrl = process.env.DATABASE_URL!

export default defineConfig({
  schema: "src/entities/",
  migrations: {
    path: "migrations/",
    seed: "tsx prisma/seed.ts"
  },
  datasource: {
    url: useSSL ? addIdentityPath(databaseUrl) : databaseUrl
  },
});
