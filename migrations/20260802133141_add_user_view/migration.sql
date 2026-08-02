-- CreateTable
CREATE TABLE "user_views" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "workspace_id" INTEGER,
    "view" JSONB NOT NULL,

    CONSTRAINT "user_views_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_views_user_id_workspace_id_key" ON "user_views"("user_id", "workspace_id") WHERE ("workspace_id" IS NOT NULL);

-- CreateIndex
CREATE UNIQUE INDEX "user_views_user_id_key" ON "user_views"("user_id") WHERE ("workspace_id" IS NULL);

-- AddForeignKey
ALTER TABLE "user_views" ADD CONSTRAINT "user_views_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_views" ADD CONSTRAINT "user_views_workspace_id_fkey" FOREIGN KEY ("workspace_id") REFERENCES "workspaces"("id") ON DELETE SET NULL ON UPDATE CASCADE;
