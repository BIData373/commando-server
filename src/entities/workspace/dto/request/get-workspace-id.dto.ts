import { Type } from "class-transformer";
import { EntityExists } from "../../../../common/decorators/entity-exists.decorator";
import { IsPositiveInt } from "../../../../common/decorators/is-positive-int.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { GetIdDto } from "../../../../common/dto/request/get-id.dto";
import { IUser } from "../../../../types";
import { PermissionType } from "../../../../types/prisma";
import { HasWorkspacePermission } from "../../decorators/has-workspace-permission.decorator";

export function GetPermittedWorkspaceIdDto(type: PermissionType, contextField: string) {
    class GetWorkspaceIdDto extends GetContextDto<{ [contextField]: IUser }> {
        @Type(() => Number)
        @HasWorkspacePermission(type, obj => obj.context[contextField])
        @EntityExists('workspace')
        @IsPositiveInt()
        id: number
    }

    return GetWorkspaceIdDto
}

export class GetWorkspaceIdDto extends GetIdDto('workspace') { }
export class GetViewerParamsWorkspaceIdDto extends GetPermittedWorkspaceIdDto(PermissionType.VIEWER, 'params') { }
export class GetManagerParamsWorkspaceIdDto extends GetPermittedWorkspaceIdDto(PermissionType.MANAGER, 'params') { }