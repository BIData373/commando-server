import { defineConfig } from "prisma/config";
import { databaseUrl, useSSL } from './src/common/consts/env';
import { addIdentityPath } from './src/common/functions/ssl';

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
