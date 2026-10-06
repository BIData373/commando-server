-- AlterTable
ALTER TABLE "assignee_task_statuses"
  ADD COLUMN "created_at" TIMESTAMP(3),
  ADD COLUMN "created_by" INTEGER,
  ADD COLUMN "updated_at" TIMESTAMP(3),
  ADD COLUMN "updated_by" INTEGER;

-- Backfill from the parent task. A status row has no audit history of its own yet, so the
-- task's is the best available record of when and by whom it came to exist.
UPDATE "assignee_task_statuses" AS s
SET
  "created_at" = t."created_at",
  "created_by" = t."created_by",
  "updated_at" = t."updated_at",
  "updated_by" = t."updated_by"
FROM "tasks" AS t
WHERE s."task_id" = t."id";

-- Make everything not null now
ALTER TABLE "assignee_task_statuses"
  ALTER COLUMN "created_at" SET NOT NULL,
  ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP,
  ALTER COLUMN "created_by" SET NOT NULL,
  ALTER COLUMN "updated_at" SET NOT NULL,
  ALTER COLUMN "updated_by" SET NOT NULL;
  

-- AddForeignKey
ALTER TABLE "assignee_task_statuses"
  ADD CONSTRAINT "assignee_task_statuses_created_by_fkey"
  FOREIGN KEY ("created_by")
  REFERENCES "users"("id")
  ON DELETE RESTRICT
  ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assignee_task_statuses"
  ADD CONSTRAINT "assignee_task_statuses_updated_by_fkey"
  FOREIGN KEY ("updated_by")
  REFERENCES "users"("id")
  ON DELETE RESTRICT
  ON UPDATE CASCADE;
