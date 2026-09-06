-- AlterTable
ALTER TABLE "users" ADD COLUMN     "personal_area_entered_at" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "user_viewed_tasks" (
    "user_id" INTEGER NOT NULL,
    "task_id" INTEGER NOT NULL,
    "panel_viewed_at" TIMESTAMP(3),

    CONSTRAINT "user_viewed_tasks_pkey" PRIMARY KEY ("user_id","task_id")
);

-- CreateTable
CREATE TABLE "user_workspace_entries" (
    "user_id" INTEGER NOT NULL,
    "workspace_id" INTEGER NOT NULL,
    "entered_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_workspace_entries_pkey" PRIMARY KEY ("user_id","workspace_id")
);

-- AddForeignKey
ALTER TABLE "user_viewed_tasks" ADD CONSTRAINT "user_viewed_tasks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_viewed_tasks" ADD CONSTRAINT "user_viewed_tasks_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_workspace_entries" ADD CONSTRAINT "user_workspace_entries_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_workspace_entries" ADD CONSTRAINT "user_workspace_entries_workspace_id_fkey" FOREIGN KEY ("workspace_id") REFERENCES "workspaces"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
