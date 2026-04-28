import { IsIdPermitted } from "../../../../common/decorators/is-permitted-id.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { PermissionType, Tag } from "../../../../types/prisma";
import { IUserContext } from "../../../user/interfaces/user-context.interface";

export function GetPermittedTagIdDto(type: PermissionType) {
    class GetTagIdDto extends GetContextDto<IUserContext & { tag: Tag }> {
        @IsIdPermitted('tag', type, {
            workspaceFindArgs: ({ value }) => ({ tags: { some: { id: value } } })
        })
        id: number
    }

    return GetTagIdDto
}

export class GetViewerTagIdDto extends GetPermittedTagIdDto(PermissionType.VIEWER) { }
export class GetManagerTagIdDto extends GetPermittedTagIdDto(PermissionType.MANAGER) { }