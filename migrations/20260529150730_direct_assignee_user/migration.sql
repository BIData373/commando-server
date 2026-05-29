/*
  Warnings:

  - You are about to drop the `assignee_users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "assignee_users" DROP CONSTRAINT "assignee_users_assignee_id_fkey";

-- DropForeignKey
ALTER TABLE "assignee_users" DROP CONSTRAINT "assignee_users_user_id_fkey";

-- DropTable
DROP TABLE "assignee_users";

-- CreateTable
CREATE TABLE "_assignee_users" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_assignee_users_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_assignee_users_B_index" ON "_assignee_users"("B");

-- AddForeignKey
ALTER TABLE "_assignee_users" ADD CONSTRAINT "_assignee_users_A_fkey" FOREIGN KEY ("A") REFERENCES "assignees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_assignee_users" ADD CONSTRAINT "_assignee_users_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
