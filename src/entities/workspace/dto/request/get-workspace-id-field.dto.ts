import { IdExists } from "../../../../common/decorators/id-exists.decorator";
import { IsIdPermitted } from "../../../../common/decorators/is-permitted-id.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { PermissionType } from "../../../../types";
import { IUserContext } from "../../../user/interfaces/user-context.interface";

export class GetWorkspaceIdFieldDto {
    @IdExists('workspace')
    workspaceId: number
}

export function GetPermittedWorkspaceIdFieldDto(type: PermissionType) {
    class GetWorkspaceIdDto extends GetContextDto<IUserContext> {
        @IsIdPermitted('workspace', type)
        workspaceId: number
    }

    return GetWorkspaceIdDto
}

export class GetViewerWorkspaceIdFieldDto extends GetPermittedWorkspaceIdFieldDto(PermissionType.VIEWER) { }
export class GetManagerWorkspaceIdFieldDto extends GetPermittedWorkspaceIdFieldDto(PermissionType.MANAGER) { }