-- CreateEnum
CREATE TYPE "ExtractionStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'BACKEND_ERROR', 'AI_SERVICE_ERROR', 'FINISHED_WITH_TASKS', 'FINISHED_WITHOUT_TASKS');

-- AlterTable
ALTER TABLE "sources" ADD COLUMN     "extraction_status" "ExtractionStatus";
