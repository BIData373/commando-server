-- CreateTable
CREATE TABLE "user_task_archives" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "task_id" INTEGER NOT NULL,
    "assignee_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_task_archives_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workspace_task_archives" (
    "id" SERIAL NOT NULL,
    "task_id" INTEGER NOT NULL,
    "assignee_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "workspace_task_archives_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_task_archives_user_id_task_id_assignee_id_key" ON "user_task_archives"("user_id", "task_id", "assignee_id");

-- CreateIndex
CREATE UNIQUE INDEX "workspace_task_archives_task_id_assignee_id_key" ON "workspace_task_archives"("task_id", "assignee_id");

-- AddForeignKey
ALTER TABLE "user_task_archives" ADD CONSTRAINT "user_task_archives_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_task_archives" ADD CONSTRAINT "user_task_archives_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_task_archives" ADD CONSTRAINT "user_task_archives_assignee_id_fkey" FOREIGN KEY ("assignee_id") REFERENCES "assignees"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workspace_task_archives" ADD CONSTRAINT "workspace_task_archives_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workspace_task_archives" ADD CONSTRAINT "workspace_task_archives_assignee_id_fkey" FOREIGN KEY ("assignee_id") REFERENCES "assignees"("id") ON DELETE SET NULL ON UPDATE CASCADE;
