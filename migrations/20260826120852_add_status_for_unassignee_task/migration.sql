-- AlterTable: add column as nullable first (existing data)
ALTER TABLE "tasks" ADD COLUMN "status_id" INTEGER;

-- Backfill: set status_id to the NOT_STARTED status of each task's workspace
UPDATE "tasks" t
SET "status_id" = (
  SELECT ws.id
  FROM "workspace_statuses" ws
  WHERE ws.workspace_id = t.workspace_id
    AND ws.status_type = 'NOT_STARTED'
  LIMIT 1
);

-- Make column required
ALTER TABLE "tasks" ALTER COLUMN "status_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "workspace_statuses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
