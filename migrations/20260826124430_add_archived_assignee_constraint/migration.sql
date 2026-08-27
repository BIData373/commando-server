-- This is an empty migration.

CREATE OR REPLACE FUNCTION check_exclusive_assignee_type()
RETURNS TRIGGER AS $$
BEGIN
    IF EXISTS (
        SELECT 1
        FROM "archived_workspace_assignee_task" a
        WHERE a.task_id = NEW.task_id
          AND a.id <> NEW.id
          AND (a.assignee_id IS NULL) <> (NEW.assignee_id IS NULL)
    ) THEN
        RAISE EXCEPTION
            'Task % cannot have both NULL and non-NULL assignee_id',
            NEW.task_id;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_exclusive_assignee_type
BEFORE INSERT OR UPDATE
ON "archived_workspace_assignee_task"
FOR EACH ROW
EXECUTE FUNCTION check_exclusive_assignee_type();