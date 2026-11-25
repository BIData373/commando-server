-- AlterTable
ALTER TABLE "assignees" ADD COLUMN "status_editable" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "assignee_users" (
    "assignee_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "status_editable" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "assignee_users_pkey" PRIMARY KEY ("assignee_id","user_id")
);

-- AddForeignKey
ALTER TABLE "assignee_users" ADD CONSTRAINT "assignee_users_assignee_id_fkey" FOREIGN KEY ("assignee_id") REFERENCES "assignees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assignee_users" ADD CONSTRAINT "assignee_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Backfill: existing assignees and their users keep today's behavior,
-- editable exactly when their workspace's assignee_status_editable is on
UPDATE "assignees" AS a
SET "status_editable" = w."assignee_status_editable"
FROM "workspaces" AS w
WHERE w."id" = a."workspace_id";

-- Move the implicit m2m rows ("A" = assignee, "B" = user) into the explicit table
INSERT INTO "assignee_users" ("assignee_id", "user_id", "status_editable")
SELECT au."A", au."B", a."status_editable"
FROM "_assignee_users" AS au
JOIN "assignees" AS a ON a."id" = au."A";

-- DropForeignKey
ALTER TABLE "_assignee_users" DROP CONSTRAINT "_assignee_users_A_fkey";

-- DropForeignKey
ALTER TABLE "_assignee_users" DROP CONSTRAINT "_assignee_users_B_fkey";

-- DropTable
DROP TABLE "_assignee_users";
