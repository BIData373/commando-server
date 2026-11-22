-- AlterTable
ALTER TABLE "workspace_statuses" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "created_by" INTEGER,
ADD COLUMN     "updated_by" INTEGER;

-- Backfill dates and users from the earliest task in each status
UPDATE "workspace_statuses" ws
SET "created_at" = t."created_at",
    "updated_at" = t."updated_at",
    "created_by" = t."created_by",
    "updated_by" = t."updated_by"
FROM (
  SELECT DISTINCT ON ("status_id") "status_id", "created_at", "updated_at", "created_by", "updated_by"
  FROM "tasks"
  ORDER BY "status_id", "created_at" ASC, "id" ASC
) t
WHERE t."status_id" = ws."id";

-- Statuses without tasks fall back to the workspace's dates and users
UPDATE "workspace_statuses" ws
SET "created_at" = w."created_at",
    "updated_at" = w."updated_at",
    "created_by" = w."created_by",
    "updated_by" = w."updated_by"
FROM "workspaces" w
WHERE w."id" = ws."workspace_id"
  AND ws."created_by" IS NULL;

ALTER TABLE "workspace_statuses" ALTER COLUMN "created_by" SET NOT NULL,
ALTER COLUMN "updated_by" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "workspace_statuses" ADD CONSTRAINT "workspace_statuses_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workspace_statuses" ADD CONSTRAINT "workspace_statuses_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
