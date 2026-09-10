-- DropForeignKey
ALTER TABLE "permissions" DROP CONSTRAINT "permissions_workspace_id_fkey";

-- AddForeignKey
ALTER TABLE "permissions" ADD CONSTRAINT "permissions_workspace_id_fkey" FOREIGN KEY ("workspace_id") REFERENCES "workspaces"("id") ON DELETE CASCADE ON UPDATE CASCADE;
