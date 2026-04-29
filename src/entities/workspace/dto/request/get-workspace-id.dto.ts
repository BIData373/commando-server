import { IsIdPermitted } from "../../../../common/decorators/is-permitted-id.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { GetIdDto } from "../../../../common/dto/request/get-id.dto";
import { PermissionType } from "../../../../types/prisma";
import { IUserContext } from "../../../user/interfaces/user-context.interface";

export function GetPermittedWorkspaceIdDto(type: PermissionType) {
    class GetWorkspaceIdDto extends GetContextDto<IUserContext> {
        @IsIdPermitted('workspace', type)
        id: number
    }

    return GetWorkspaceIdDto
}

export class GetWorkspaceIdDto extends GetIdDto('workspace') { }
export class GetViewerWorkspaceIdDto extends GetPermittedWorkspaceIdDto(PermissionType.VIEWER) { }
export class GetManagerWorkspaceIdDto extends GetPermittedWorkspaceIdDto(PermissionType.MANAGER) { }