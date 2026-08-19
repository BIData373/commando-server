-- CreateEnum
CREATE TYPE "workspace_request_status" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateTable
CREATE TABLE "workspace_requests" (
    "id" SERIAL NOT NULL,
    "details" JSONB NOT NULL,
    "status" "workspace_request_status" NOT NULL DEFAULT 'PENDING',
    "decline_message" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" INTEGER NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "updated_by" INTEGER NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "deleted_by" INTEGER,

    CONSTRAINT "workspace_requests_pkey" PRIMARY KEY ("id")
);
