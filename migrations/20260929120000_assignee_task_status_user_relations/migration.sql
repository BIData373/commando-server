-- AddForeignKey
ALTER TABLE "assignee_task_statuses" ADD CONSTRAINT "assignee_task_statuses_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assignee_task_statuses" ADD CONSTRAINT "assignee_task_statuses_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
