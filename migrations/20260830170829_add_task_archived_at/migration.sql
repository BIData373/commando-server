/*
  Warnings:

  - Made the column `assignee_id` on table `archived_user_assignee_task` required. This step will fail if there are existing NULL values in that column.
  - Made the column `assignee_id` on table `archived_workspace_assignee_task` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "tasks" ADD COLUMN     "archived_at" TIMESTAMP(3);

-- "Archived for the whole workspace" moves off the null-assignee row onto the task,
-- keeping the earliest time it was archived.
UPDATE "tasks" t
SET "archived_at" = a."archived_at"
FROM (
    SELECT "task_id", MIN("created_at") AS "archived_at"
    FROM "archived_workspace_assignee_task"
    WHERE "assignee_id" IS NULL
    GROUP BY "task_id"
) a
WHERE a."task_id" = t."id";

DELETE FROM "archived_workspace_assignee_task" WHERE "assignee_id" IS NULL;

-- A user archive is always scoped to an assignee the user belongs to,
-- so a row without one can never be reached.
DELETE FROM "archived_user_assignee_task" WHERE "assignee_id" IS NULL;

-- DropForeignKey
ALTER TABLE "archived_user_assignee_task" DROP CONSTRAINT "archived_user_assignee_task_assignee_id_fkey";

-- DropForeignKey
ALTER TABLE "archived_workspace_assignee_task" DROP CONSTRAINT "archived_workspace_assignee_task_assignee_id_fkey";

-- AlterTable
ALTER TABLE "archived_user_assignee_task" ALTER COLUMN "assignee_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "archived_workspace_assignee_task" ALTER COLUMN "assignee_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "archived_user_assignee_task" ADD CONSTRAINT "archived_user_assignee_task_assignee_id_fkey" FOREIGN KEY ("assignee_id") REFERENCES "assignees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "archived_workspace_assignee_task" ADD CONSTRAINT "archived_workspace_assignee_task_assignee_id_fkey" FOREIGN KEY ("assignee_id") REFERENCES "assignees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
