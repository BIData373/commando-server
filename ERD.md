```mermaid
erDiagram

        PermissionType {
            VIEWER VIEWER
MANAGER MANAGER
        }
    


        ExtractionStatus {
            PENDING PENDING
IN_PROGRESS IN_PROGRESS
BACKEND_ERROR BACKEND_ERROR
AI_SERVICE_ERROR AI_SERVICE_ERROR
FINISHED_WITH_TASKS FINISHED_WITH_TASKS
FINISHED_WITHOUT_TASKS FINISHED_WITHOUT_TASKS
        }
    


        DeadlineType {
            IMMEDIATE IMMEDIATE
DATE DATE
ROLLING ROLLING
        }
    


        TaskCreationType {
            HUMAN HUMAN
AI_HUMAN AI_HUMAN
AI AI
        }
    


        HistoryAction {
            CREATE CREATE
UPDATE UPDATE
DUPLICATE DUPLICATE
DELETE DELETE
        }
    


        WorkspaceStatusType {
            NOT_STARTED NOT_STARTED
IN_PROGRESS IN_PROGRESS
COMPLETED COMPLETED
        }
    
  "assignees" {
    Int id "🗝️"
    String name 
    String color 
    String icon "❓"
    String icon_name "❓"
    Int workspace_id 
    DateTime created_at 
    Int created_by 
    DateTime updated_at 
    Int updated_by 
    DateTime deleted_at "❓"
    Int deleted_by "❓"
    }
  

  "assignee_task_statuses" {
    Int task_id 
    Int assignee_id 
    Int status_id 
    String description "❓"
    }
  

  "messages" {
    Int id "🗝️"
    String content 
    Int user_id 
    Int task_id 
    DateTime created_at 
    Int created_by 
    DateTime updated_at 
    Int updated_by 
    DateTime deleted_at "❓"
    Int deleted_by "❓"
    }
  

  "permissions" {
    Int user_id 
    Int workspace_id 
    PermissionType type 
    }
  

  "pikuds" {
    Int id "🗝️"
    String name 
    String icon "❓"
    DateTime created_at 
    Int created_by 
    DateTime updated_at 
    Int updated_by 
    DateTime deleted_at "❓"
    Int deleted_by "❓"
    }
  

  "sources" {
    Int id "🗝️"
    String name 
    DateTime date "❓"
    String attachment_key "❓"
    String attachment_name "❓"
    Boolean draft 
    ExtractionStatus extraction_status "❓"
    Int workspace_id 
    DateTime created_at 
    Int created_by 
    DateTime updated_at 
    Int updated_by 
    DateTime deleted_at "❓"
    Int deleted_by "❓"
    }
  

  "tags" {
    Int id "🗝️"
    String name 
    DateTime created_at 
    Int created_by 
    DateTime updated_at 
    Int updated_by 
    Int workspace_id 
    }
  

  "tasks" {
    Int id "🗝️"
    String title 
    String description "❓"
    Boolean flagged 
    DeadlineType deadline_type 
    DateTime due_date "❓"
    String notes "❓"
    TaskCreationType creation_type 
    DateTime created_at 
    Int created_by 
    DateTime updated_at 
    Int updated_by 
    DateTime deleted_at "❓"
    Int deleted_by "❓"
    Int workspace_id 
    Int source_id "❓"
    }
  

  "tasks_history" {
    Int id "🗝️"
    HistoryAction action 
    String field 
    String value "❓"
    DateTime timestamp 
    Int task_id 
    Int workspace_id 
    Int user_id 
    }
  

  "users" {
    Int id "🗝️"
    String upn 
    Json info "❓"
    }
  

  "workspaces" {
    Int id "🗝️"
    String title 
    String url_name 
    String icon "❓"
    Boolean assignee_status_editable 
    Boolean chat_notification 
    Boolean mail_notification 
    DateTime created_at 
    Int created_by 
    DateTime updated_at 
    Int updated_by 
    DateTime deleted_at "❓"
    Int deleted_by "❓"
    Int pikud_id 
    }
  

  "workspace_statuses" {
    Int id "🗝️"
    String name 
    String color 
    WorkspaceStatusType status_type 
    Int workspace_id 
    }
  
    "assignees" }o--|| workspaces : "workspace"
    "assignees" o{--}o "users" : ""
    "assignee_task_statuses" }o--|| tasks : "task"
    "assignee_task_statuses" }o--|| assignees : "assignee"
    "assignee_task_statuses" }o--|| workspace_statuses : "status"
    "messages" }o--|| users : "user"
    "messages" }o--|| tasks : "task"
    "permissions" |o--|| "PermissionType" : "enum:type"
    "permissions" }o--|| users : "user"
    "permissions" }o--|| workspaces : "workspace"
    "sources" |o--|o "ExtractionStatus" : "enum:extraction_status"
    "sources" }o--|| workspaces : "workspace"
    "sources" o{--}o "tags" : ""
    "tags" }o--|| workspaces : "workspace"
    "tags" o{--}o "tasks" : ""
    "tasks" |o--|| "DeadlineType" : "enum:deadline_type"
    "tasks" |o--|| "TaskCreationType" : "enum:creation_type"
    "tasks" }o--|| workspaces : "workspace"
    "tasks" }o--|o sources : "source"
    "tasks_history" |o--|| "HistoryAction" : "enum:action"
    "tasks_history" }o--|| tasks : "task"
    "tasks_history" }o--|| workspaces : "workspace"
    "tasks_history" }o--|| users : "user"
    "workspaces" }o--|| pikuds : "pikud"
    "workspace_statuses" |o--|| "WorkspaceStatusType" : "enum:status_type"
    "workspace_statuses" }o--|| workspaces : "workspace"
```
