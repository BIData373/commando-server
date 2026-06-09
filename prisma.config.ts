import { config } from 'dotenv';
import path from 'node:path';
import { defineConfig } from "prisma/config";

// allow build to happen without issues
if (process.env.ENV) {
  config({ path: path.join('./config', process.env.ENV, '.env') })
}

export default defineConfig({
  schema: "src/entities/",
  migrations: {
    path: "migrations/",
    seed: "tsx prisma/seed.ts"
  },
  datasource: {
    url: process.env.DATABASE_URL
  },
});
