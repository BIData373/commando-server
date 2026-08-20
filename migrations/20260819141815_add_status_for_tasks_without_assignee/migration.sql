-- AlterTable
ALTER TABLE "tasks" ADD COLUMN     "status_id" INTEGER;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "workspace_statuses"("id") ON DELETE SET NULL ON UPDATE CASCADE;
