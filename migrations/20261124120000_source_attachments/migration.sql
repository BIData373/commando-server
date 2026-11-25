-- CreateTable
CREATE TABLE "source_attachments" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "extraction_status" "ExtractionStatus",
    "visible_to_assignees" BOOLEAN NOT NULL DEFAULT false,
    "source_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" INTEGER NOT NULL,
    "updated_by" INTEGER NOT NULL,

    CONSTRAINT "source_attachments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "source_attachments_key_key" ON "source_attachments"("key");

-- CreateIndex
CREATE INDEX "source_attachments_source_id_idx" ON "source_attachments"("source_id");

-- AddForeignKey
ALTER TABLE "source_attachments" ADD CONSTRAINT "source_attachments_source_id_fkey" FOREIGN KEY ("source_id") REFERENCES "sources"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "source_attachments" ADD CONSTRAINT "source_attachments_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "source_attachments" ADD CONSTRAINT "source_attachments_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Move each source's single attachment, with its extraction status, into its own row
INSERT INTO "source_attachments" ("key", "name", "extraction_status", "visible_to_assignees", "source_id", "created_at", "updated_at", "created_by", "updated_by")
SELECT
  s."attachment_key",
  COALESCE(s."attachment_name", s."attachment_key"),
  s."extraction_status",
  true,
  s."id",
  s."created_at",
  s."updated_at",
  s."created_by",
  s."updated_by"
FROM "sources" AS s
WHERE s."attachment_key" IS NOT NULL;

-- AlterTable
ALTER TABLE "sources" DROP COLUMN "attachment_key",
DROP COLUMN "attachment_name",
DROP COLUMN "extraction_status";
