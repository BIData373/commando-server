-- CreateTable
CREATE TABLE "archived_user_assignee_task" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "task_id" INTEGER NOT NULL,
    "assignee_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "archived_user_assignee_task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "archived_workspace_assignee_task" (
    "id" SERIAL NOT NULL,
    "task_id" INTEGER NOT NULL,
    "assignee_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "archived_workspace_assignee_task_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "archived_user_assignee_task_user_id_task_id_assignee_id_key" ON "archived_user_assignee_task"("user_id", "task_id", "assignee_id");

-- CreateIndex
CREATE UNIQUE INDEX "archived_workspace_assignee_task_task_id_assignee_id_key" ON "archived_workspace_assignee_task"("task_id", "assignee_id");

-- AddForeignKey
ALTER TABLE "archived_user_assignee_task" ADD CONSTRAINT "archived_user_assignee_task_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "archived_user_assignee_task" ADD CONSTRAINT "archived_user_assignee_task_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "archived_user_assignee_task" ADD CONSTRAINT "archived_user_assignee_task_assignee_id_fkey" FOREIGN KEY ("assignee_id") REFERENCES "assignees"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "archived_workspace_assignee_task" ADD CONSTRAINT "archived_workspace_assignee_task_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "archived_workspace_assignee_task" ADD CONSTRAINT "archived_workspace_assignee_task_assignee_id_fkey" FOREIGN KEY ("assignee_id") REFERENCES "assignees"("id") ON DELETE SET NULL ON UPDATE CASCADE;
