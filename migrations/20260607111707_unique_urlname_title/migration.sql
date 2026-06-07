/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `workspaces` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[url_name]` on the table `workspaces` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "workspaces_title_key" ON "workspaces"("title");

-- CreateIndex
CREATE UNIQUE INDEX "workspaces_url_name_key" ON "workspaces"("url_name");
