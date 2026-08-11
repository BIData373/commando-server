import { UserInfo } from "../entities/user/types/user-info.type";
import { WorkspaceRequestDetails } from "../entities/workspace-requests/types/workspace-request-details.type";
import { Workspace } from "./prisma";

declare global {
  namespace PrismaJson {
    export {
      UserInfo,
      Workspace,
      WorkspaceRequestDetails
    }
  }
}

export { };
