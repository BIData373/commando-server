-- CreateTable
CREATE TABLE "user_viewed_tasks" (
    "user_id" INTEGER NOT NULL,
    "task_id" INTEGER NOT NULL,
    "panel_viewed_at" TIMESTAMP(3),
    "table_viewed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_viewed_tasks_pkey" PRIMARY KEY ("user_id","task_id")
);

-- CreateIndex
CREATE INDEX "user_viewed_tasks_user_id_idx" ON "user_viewed_tasks"("user_id");

-- AddForeignKey
ALTER TABLE "user_viewed_tasks" ADD CONSTRAINT "user_viewed_tasks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_viewed_tasks" ADD CONSTRAINT "user_viewed_tasks_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
