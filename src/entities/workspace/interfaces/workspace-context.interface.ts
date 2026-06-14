import { Workspace } from "../../../types/prisma";
import { WorkspaceWithPermissions } from "../types/workspace-with-permission.type";

export interface IWorkspaceContext {
  workspace: Workspace
}

export interface IWorkspaceWithPermissionContext {
  workspace: WorkspaceWithPermissions
}