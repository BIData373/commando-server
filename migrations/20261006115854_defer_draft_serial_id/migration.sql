-- AlterTable: tasks of a draft source have no serial id until the source is published.
ALTER TABLE "tasks" ALTER COLUMN "serial_id" DROP NOT NULL;

-- The renumber below shifts numbers down inside the same workspace, which would trip the
-- non-deferrable unique index mid-statement, so it is rebuilt afterwards.
DROP INDEX IF EXISTS "tasks_workspace_id_serial_id_key";

UPDATE "tasks" AS t
SET "serial_id" = NULL
FROM "sources" AS s
WHERE t."source_id" = s."id" AND s."draft" = true;

-- Renumber the remaining (published) tasks contiguously per workspace, so the numbers that
-- drafts used to hold are not left as gaps. Soft-deleted tasks keep a number, as in
-- 20260831145811_add_task_serial_id.
UPDATE "tasks" AS t
SET "serial_id" = numbered."serial_id"
FROM (
  SELECT
    "id",
    ROW_NUMBER() OVER (
      PARTITION BY "workspace_id"
      ORDER BY "created_at" ASC, "id" ASC
    ) AS "serial_id"
  FROM "tasks"
  WHERE "serial_id" IS NOT NULL
) AS numbered
WHERE t."id" = numbered."id";

UPDATE "workspaces" AS w
SET "task_counter" = COALESCE(
  (SELECT MAX(t."serial_id") FROM "tasks" AS t WHERE t."workspace_id" = w."id"),
  0
);

CREATE UNIQUE INDEX "tasks_workspace_id_serial_id_key" ON "tasks"("workspace_id", "serial_id");