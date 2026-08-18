-- Copy notes to messages

INSERT INTO messages (task_id, content, created_at, updated_at, created_by, updated_by, user_id)
SELECT id, regexp_replace(notes, '<[^>]+>', '', 'g'), created_at, created_at, created_by, created_by, created_by FROM tasks 
WHERE notes IS NOT NULL