-- AlterTable
ALTER TABLE "workspaces" ADD COLUMN     "chat_notification" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "mail_notification" BOOLEAN NOT NULL DEFAULT false;
