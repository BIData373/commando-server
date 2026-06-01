/*
  Warnings:

  - Changed the type of `status_type` on the `workspace_statuses` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "WorkspaceStatusType" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED');

-- AlterTable
ALTER TABLE "workspace_statuses" DROP COLUMN "status_type",
ADD COLUMN     "status_type" "WorkspaceStatusType" NOT NULL;
