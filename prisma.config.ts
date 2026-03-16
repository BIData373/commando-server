import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "src/entities/",
  migrations: {
    path: "migrations/",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
