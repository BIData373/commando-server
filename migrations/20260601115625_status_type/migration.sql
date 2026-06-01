/*
  Warnings:

  - The `status_type` column on the `workspace_statuses` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "WorkspaceStatusType" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED');

-- AlterTable
ALTER TABLE "workspace_statuses" DROP COLUMN "status_type",
ADD COLUMN     "status_type" "WorkspaceStatusType" NOT NULL DEFAULT 'NOT_STARTED';
