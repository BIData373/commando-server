import { Workspace } from "../../../types/prisma";
import { WorkspaceWithPermissionsEntity } from "../../assignee-task-status/assignee-task-status.service";

export interface IWorkspaceContext {
    workspace: Workspace
}

export interface IWorkspaceWithPermissionContext {
    workspace: WorkspaceWithPermissionsEntity
}