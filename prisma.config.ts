import { defineConfig } from "prisma/config";
import { config } from "dotenv";
import path from "node:path";

const env = process.env.ENV ?? '';
const cwd = process.cwd();

config({ path: path.join(cwd, 'config/common.env') });
config({ path: path.join(cwd, 'config', env, '.env') });

const databaseUrl = process.env.DATABASE_URL!;
const useSSL = process.env.DB_USE_SSL === 'true';

export default defineConfig({
  schema: "src/entities/",
  migrations: {
    path: "migrations/",
    seed: "tsx prisma/seed.ts"
  },
  datasource: {
    url: useSSL
      ? await import('./src/common/functions/ssl').then(m => m.addIdentityPath(databaseUrl))
      : databaseUrl
  },
});
