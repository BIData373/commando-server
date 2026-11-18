-- AlterTable
ALTER TABLE "workspace_statuses" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3);

UPDATE "workspace_statuses" SET "updated_at" = NOW();

-- Backfill both dates from the earliest task in each status
UPDATE "workspace_statuses" ws
SET "created_at" = t."min_created_at",
    "updated_at" = t."min_created_at"
FROM (
  SELECT "status_id", MIN("created_at") AS "min_created_at"
  FROM "tasks"
  GROUP BY "status_id"
) t
WHERE t."status_id" = ws."id";

ALTER TABLE "workspace_statuses" ALTER COLUMN "updated_at" SET NOT NULL;
