import { IsIdPermitted } from "../../../../common/decorators/is-permitted-id.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { PermissionType } from "../../../../types/prisma";
import { IUserContext } from "../../../user/interfaces/user-context.interface";
import { IWorkspaceStatusContext } from "../../interfaces/workspace-status-context.interface";

export function GetPermittedWorkspaceStatusIdDto(type: PermissionType) {
    class GetWorkspaceStatusIdDto extends GetContextDto<IUserContext & IWorkspaceStatusContext> {
        @IsIdPermitted('workspaceStatus', type)
        id: number
    }

    return GetWorkspaceStatusIdDto
}

export class GetViewerWorkspaceStatusIdDto extends GetPermittedWorkspaceStatusIdDto(PermissionType.VIEWER) { }
export class GetManagerWorkspaceStatusIdDto extends GetPermittedWorkspaceStatusIdDto(PermissionType.MANAGER) { }