-- CreateEnum
CREATE TYPE "TaskCreationType" AS ENUM ('HUMAN', 'AI_HUMAN', 'AI');

-- AlterTable
ALTER TABLE "tasks" ADD COLUMN "creation_type" "TaskCreationType" NOT NULL DEFAULT 'HUMAN';
