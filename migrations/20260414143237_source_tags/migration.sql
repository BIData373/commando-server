/*
  Warnings:

  - You are about to drop the `_TaskToTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_TaskToTag" DROP CONSTRAINT "_TaskToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_TaskToTag" DROP CONSTRAINT "_TaskToTag_B_fkey";

-- DropTable
DROP TABLE "_TaskToTag";

-- CreateTable
CREATE TABLE "_sources_tags" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_sources_tags_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_tasks_tags" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_tasks_tags_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_sources_tags_B_index" ON "_sources_tags"("B");

-- CreateIndex
CREATE INDEX "_tasks_tags_B_index" ON "_tasks_tags"("B");

-- AddForeignKey
ALTER TABLE "_sources_tags" ADD CONSTRAINT "_sources_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "sources"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_sources_tags" ADD CONSTRAINT "_sources_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_tasks_tags" ADD CONSTRAINT "_tasks_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_tasks_tags" ADD CONSTRAINT "_tasks_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
