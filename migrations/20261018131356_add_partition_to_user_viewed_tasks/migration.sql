-- AlterTable
ALTER TABLE "users"
ADD COLUMN "personal_area_entered_at" TIMESTAMP(3);
-- CreateTable
CREATE TABLE "user_workspace_visits" (
  "user_id" INTEGER NOT NULL,
  "workspace_id" INTEGER NOT NULL,
  "visited_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "user_workspace_visits_pkey" PRIMARY KEY ("user_id", "workspace_id")
);
-- AddForeignKey
ALTER TABLE "user_workspace_visits"
ADD CONSTRAINT "user_workspace_visits_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
-- AddForeignKey
ALTER TABLE "user_workspace_visits"
ADD CONSTRAINT "user_workspace_visits_workspace_id_fkey" FOREIGN KEY ("workspace_id") REFERENCES "workspaces"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
-- Create partition parent table
CREATE TABLE user_viewed_tasks (
  user_id INT NOT NULL,
  task_id INT NOT NULL,
  viewed_at TIMESTAMPTZ,
  PRIMARY KEY (user_id, task_id),
  CONSTRAINT user_viewed_tasks_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id),
  CONSTRAINT user_viewed_tasks_task_id_fkey FOREIGN KEY (task_id) REFERENCES tasks(id)
) PARTITION BY HASH (user_id);
-- Create 8 hash partitions
CREATE TABLE user_viewed_tasks_p0 PARTITION OF user_viewed_tasks FOR
VALUES WITH (MODULUS 8, REMAINDER 0);
CREATE TABLE user_viewed_tasks_p1 PARTITION OF user_viewed_tasks FOR
VALUES WITH (MODULUS 8, REMAINDER 1);
CREATE TABLE user_viewed_tasks_p2 PARTITION OF user_viewed_tasks FOR
VALUES WITH (MODULUS 8, REMAINDER 2);
CREATE TABLE user_viewed_tasks_p3 PARTITION OF user_viewed_tasks FOR
VALUES WITH (MODULUS 8, REMAINDER 3);
CREATE TABLE user_viewed_tasks_p4 PARTITION OF user_viewed_tasks FOR
VALUES WITH (MODULUS 8, REMAINDER 4);
CREATE TABLE user_viewed_tasks_p5 PARTITION OF user_viewed_tasks FOR
VALUES WITH (MODULUS 8, REMAINDER 5);
CREATE TABLE user_viewed_tasks_p6 PARTITION OF user_viewed_tasks FOR
VALUES WITH (MODULUS 8, REMAINDER 6);
CREATE TABLE user_viewed_tasks_p7 PARTITION OF user_viewed_tasks FOR
VALUES WITH (MODULUS 8, REMAINDER 7);