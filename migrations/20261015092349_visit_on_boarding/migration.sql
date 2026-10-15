-- AlterTable
ALTER TABLE "permissions" ADD COLUMN     "has_entered_workspace" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "has_onboarded" BOOLEAN NOT NULL DEFAULT false;
