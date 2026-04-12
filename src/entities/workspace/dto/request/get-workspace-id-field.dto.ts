import { Type } from "class-transformer";
import { EntityExists } from "../../../../common/decorators/entity-exists.decorator";
import { IsPositiveInt } from "../../../../common/decorators/is-positive-int.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { IUser, PermissionType } from "../../../../types";
import { HasWorkspacePermission } from "../../decorators/has-workspace-permission.decorator";

export class GetWorkspaceIdFieldDto {
    @Type(() => Number)
    @EntityExists('workspace')
    @IsPositiveInt()
    workspaceId: number
}

export function GetPermittedWorkspaceIdFieldDto(type: PermissionType, contextField: string) {
    class GetWorkspaceIdDto extends GetContextDto<{ [contextField]: IUser }> {
        @Type(() => Number)
        @HasWorkspacePermission(type, obj => obj.context[contextField], { forbidden: true })
        @EntityExists('workspace')
        @IsPositiveInt()
        workspaceId: number
    }

    return GetWorkspaceIdDto
}

// export class GetViewerWorkspaceIdFieldDto extends GetPermittedWorkspaceIdFieldDto(PermissionType.VIEWER) { }
// export class GetManagerWorkspaceIdFieldDto extends GetPermittedWorkspaceIdFieldDto(PermissionType.MANAGER) { }
