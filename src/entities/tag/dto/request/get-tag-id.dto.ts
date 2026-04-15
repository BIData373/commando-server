import { Type } from "class-transformer";
import { EntityExists } from "../../../../common/decorators/entity-exists.decorator";
import { IsPositiveInt } from "../../../../common/decorators/is-positive-int.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { GetIdDto } from "../../../../common/dto/request/get-id.dto";
import { IUser } from "../../../../types";
import { PermissionType } from "../../../../types/prisma";
import { HasWorkspacePermission } from "../../../workspace/decorators/has-workspace-permission.decorator";

export class GetTagIdDto extends GetIdDto('tag', { contextField: 'tag' }) { }

export function GetPermittedTagIdDto(type: PermissionType, contextField: string) {
    class GetTagIdDto extends GetContextDto<{ [contextField]: IUser }> {
        @Type(() => Number)
        @IsPositiveInt()
        @EntityExists('tag', { contextField: 'tag' })
        @HasWorkspacePermission(type, obj => obj.context[contextField], {
            workspaceFindArgs: ({ value }) => ({ tags: { some: { id: value } } })
        })
        id: number
    }

    return GetTagIdDto
}

export class GetViewerParamsTagIdDto extends GetPermittedTagIdDto(PermissionType.VIEWER, 'params') { }
export class GetManagerParamsTagIdDto extends GetPermittedTagIdDto(PermissionType.MANAGER, 'params') { }