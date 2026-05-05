import { IsIdPermitted } from "../../../../common/decorators/is-permitted-id.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { PermissionType } from "../../../../types/prisma";
import { IUserContext } from "../../../user/interfaces/user-context.interface";
import { ITagContext } from "../../interfaces/tag-context.interface";

export function GetPermittedTagIdDto(type: PermissionType) {
    class GetTagIdDto extends GetContextDto<IUserContext & ITagContext> {
        @IsIdPermitted('tag', type, {
            workspaceFindArgs: ({ value }) => ({ tags: { some: { id: value } } })
        })
        id: number
    }

    return GetTagIdDto
}

export class GetViewerTagIdDto extends GetPermittedTagIdDto(PermissionType.VIEWER) { }
export class GetManagerTagIdDto extends GetPermittedTagIdDto(PermissionType.MANAGER) { }