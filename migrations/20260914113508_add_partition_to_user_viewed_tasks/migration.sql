-- Rename existing table to temp
ALTER TABLE user_viewed_tasks RENAME TO user_viewed_tasks_old;

-- Drop FK constraints from old table
ALTER TABLE user_viewed_tasks_old DROP CONSTRAINT IF EXISTS user_viewed_tasks_user_id_fkey;
ALTER TABLE user_viewed_tasks_old DROP CONSTRAINT IF EXISTS user_viewed_tasks_task_id_fkey;

-- Create new partitioned parent table
CREATE TABLE user_viewed_tasks (
    user_id     INT       NOT NULL,
    task_id     INT       NOT NULL,
    viewed_at TIMESTAMPTZ,
    PRIMARY KEY (user_id, task_id),
    CONSTRAINT user_viewed_tasks_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT user_viewed_tasks_task_id_fkey FOREIGN KEY (task_id) REFERENCES tasks(id)
) PARTITION BY HASH (user_id);

-- Create 8 hash partitions
CREATE TABLE user_viewed_tasks_p0 PARTITION OF user_viewed_tasks FOR VALUES WITH (MODULUS 8, REMAINDER 0);
CREATE TABLE user_viewed_tasks_p1 PARTITION OF user_viewed_tasks FOR VALUES WITH (MODULUS 8, REMAINDER 1);
CREATE TABLE user_viewed_tasks_p2 PARTITION OF user_viewed_tasks FOR VALUES WITH (MODULUS 8, REMAINDER 2);
CREATE TABLE user_viewed_tasks_p3 PARTITION OF user_viewed_tasks FOR VALUES WITH (MODULUS 8, REMAINDER 3);
CREATE TABLE user_viewed_tasks_p4 PARTITION OF user_viewed_tasks FOR VALUES WITH (MODULUS 8, REMAINDER 4);
CREATE TABLE user_viewed_tasks_p5 PARTITION OF user_viewed_tasks FOR VALUES WITH (MODULUS 8, REMAINDER 5);
CREATE TABLE user_viewed_tasks_p6 PARTITION OF user_viewed_tasks FOR VALUES WITH (MODULUS 8, REMAINDER 6);
CREATE TABLE user_viewed_tasks_p7 PARTITION OF user_viewed_tasks FOR VALUES WITH (MODULUS 8, REMAINDER 7);

-- Migrate data
INSERT INTO user_viewed_tasks SELECT * FROM user_viewed_tasks_old;

-- Drop old table
DROP TABLE user_viewed_tasks_old;