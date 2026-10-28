-- CreateTable
CREATE TABLE "assignee_groups" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "workspace_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "created_by" INTEGER NOT NULL,
    "updated_by" INTEGER NOT NULL,
    "deleted_by" INTEGER,

    CONSTRAINT "assignee_groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_assignee_groups_assignees" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_assignee_groups_assignees_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_assignee_groups_assignees_B_index" ON "_assignee_groups_assignees"("B");

-- AddForeignKey
ALTER TABLE "assignee_groups" ADD CONSTRAINT "assignee_groups_workspace_id_fkey" FOREIGN KEY ("workspace_id") REFERENCES "workspaces"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assignee_groups" ADD CONSTRAINT "assignee_groups_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assignee_groups" ADD CONSTRAINT "assignee_groups_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assignee_groups" ADD CONSTRAINT "assignee_groups_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_assignee_groups_assignees" ADD CONSTRAINT "_assignee_groups_assignees_A_fkey" FOREIGN KEY ("A") REFERENCES "assignees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_assignee_groups_assignees" ADD CONSTRAINT "_assignee_groups_assignees_B_fkey" FOREIGN KEY ("B") REFERENCES "assignee_groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;
