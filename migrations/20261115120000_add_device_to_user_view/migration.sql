-- CreateEnum
CREATE TYPE "device" AS ENUM ('MOBILE', 'DESKTOP');

-- AlterTable (add nullable column)
ALTER TABLE "user_views" ADD COLUMN "device" "device";

-- Backfill existing rows
UPDATE "user_views" SET "device" = 'DESKTOP' WHERE "device" IS NULL;

-- Make column NOT NULL
ALTER TABLE "user_views" ALTER COLUMN "device" SET NOT NULL;

-- DropIndex (old unique constraints)
DROP INDEX "user_views_user_id_workspace_id_key";
DROP INDEX "user_views_user_id_key";

-- CreateIndex (new unique constraints with device)
CREATE UNIQUE INDEX "user_views_user_id_workspace_id_device_key" ON "user_views"("user_id", "workspace_id", "device") WHERE ("workspace_id" IS NOT NULL);
CREATE UNIQUE INDEX "user_views_user_id_device_key" ON "user_views"("user_id", "device") WHERE ("workspace_id" IS NULL);
