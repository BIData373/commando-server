-- AlterTable: audit fields on assignee statuses.
-- Added nullable so existing rows can be backfilled before the NOT NULL is enforced.
ALTER TABLE "assignee_task_statuses"
  ADD COLUMN "created_at" TIMESTAMP(3),
  ADD COLUMN "created_by" INTEGER,
  ADD COLUMN "updated_at" TIMESTAMP(3),
  ADD COLUMN "updated_by" INTEGER,
  ADD COLUMN "deleted_at" TIMESTAMP(3),
  ADD COLUMN "deleted_by" INTEGER;

-- Backfill from the parent task. A status row has no audit history of its own yet, so the
-- task's is the best available record of when and by whom it came to exist.
UPDATE "assignee_task_statuses" AS s
SET
  "created_at" = t."created_at",
  "created_by" = t."created_by",
  "updated_at" = t."updated_at",
  "updated_by" = t."updated_by",
  "deleted_at" = t."deleted_at",
  "deleted_by" = t."deleted_by"
FROM "tasks" AS t
WHERE s."task_id" = t."id";

-- Now enforce the shape Prisma expects. `created_at` gets the DB default so `@default(now())`
-- holds for any row inserted without it; `updated_at` deliberately has none — `@updatedAt` is
-- written by Prisma Client on every create and update, not by Postgres.
ALTER TABLE "assignee_task_statuses"
  ALTER COLUMN "created_at" SET NOT NULL,
  ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP,
  ALTER COLUMN "created_by" SET NOT NULL,
  ALTER COLUMN "updated_at" SET NOT NULL,
  ALTER COLUMN "updated_by" SET NOT NULL;
