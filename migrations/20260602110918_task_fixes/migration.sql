/*
  Warnings:

  - You are about to drop the column `issued_at` on the `tasks` table. All the data in the column will be lost.
  - Changed the type of `deadline_type` on the `tasks` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "DeadlineType" AS ENUM ('IMMEDIATE', 'DATE', 'ROLLING');

-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_source_id_fkey";

-- AlterTable
ALTER TABLE "tasks" DROP COLUMN "issued_at",
DROP COLUMN "deadline_type",
ALTER COLUMN "due_date" DROP NOT NULL,
ALTER COLUMN "source_id" DROP NOT NULL;

ALTER TABLE "tasks" ADD COLUMN "deadline_type" "DeadlineType" NOT NULL DEFAULT 'IMMEDIATE';
ALTER TABLE "tasks" ALTER COLUMN "deadline_type" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_source_id_fkey" FOREIGN KEY ("source_id") REFERENCES "sources"("id") ON DELETE SET NULL ON UPDATE CASCADE;
