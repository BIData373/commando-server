/*
  Warnings:

  - Added the required column `workspace_id` to the `assignees` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "assignees" ADD COLUMN     "workspace_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "assignees" ADD CONSTRAINT "assignees_workspace_id_fkey" FOREIGN KEY ("workspace_id") REFERENCES "workspaces"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
