-- CreateTable
CREATE TABLE "user_viewed_messages" (
    "user_id" INTEGER NOT NULL,
    "task_id" INTEGER NOT NULL,
    "viewed_message_at" TIMESTAMP(3),
    "viewed_task_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_viewed_messages_pkey" PRIMARY KEY ("user_id","task_id")
);

-- AddForeignKey
ALTER TABLE "user_viewed_messages" ADD CONSTRAINT "user_viewed_messages_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_viewed_messages" ADD CONSTRAINT "user_viewed_messages_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
