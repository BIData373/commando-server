-- AlterTable: per-workspace running number on tasks.
-- Added nullable so existing rows can be backfilled before the NOT NULL is enforced.
ALTER TABLE "tasks" ADD COLUMN "serial_id" INTEGER;

-- Backfill: number every existing task inside its own workspace by creation order.
-- Soft-deleted tasks are numbered too — they are still rows, and skipping them would let a
-- later task reuse a number that was already shown to a user.
-- "id" is the tie-break: AI extraction writes a batch of tasks that can share a created_at
-- down to the millisecond, and without it the numbering would be non-deterministic.
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
) AS numbered
WHERE t."id" = numbered."id";

ALTER TABLE "tasks" ALTER COLUMN "serial_id" SET NOT NULL;

-- AlterTable: the counter each workspace hands numbers out from.
ALTER TABLE "workspaces" ADD COLUMN "last_task_id" INTEGER NOT NULL DEFAULT 0;

-- Backfill the counter to the highest number already handed out, so the next task created
-- continues the sequence instead of colliding with a backfilled row.
-- Workspaces with no tasks keep the DEFAULT 0.
UPDATE "workspaces" AS w
SET "last_task_id" = highest."max_serial_id"
FROM (
  SELECT "workspace_id", MAX("serial_id") AS "max_serial_id"
  FROM "tasks"
  GROUP BY "workspace_id"
) AS highest
WHERE w."id" = highest."workspace_id";

-- CreateIndex: one serial per workspace. This is the backstop that turns a counter race into
-- a failed insert instead of two tasks silently sharing a number.
CREATE UNIQUE INDEX "tasks_workspace_id_serial_id_key" ON "tasks"("workspace_id", "serial_id");
