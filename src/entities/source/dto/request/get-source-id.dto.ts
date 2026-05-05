import { IsIdPermitted } from "../../../../common/decorators/is-permitted-id.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { PermissionType } from "../../../../types/prisma";
import { IUserContext } from "../../../user/interfaces/user-context.interface";
import { ISourceContext } from "../../interfaces/source-context.interface";

export function GetPermittedSourceIdDto(type: PermissionType) {
    class GetSourceIdDto extends GetContextDto<IUserContext & ISourceContext> {
        @IsIdPermitted('source', type, {
            workspaceFindArgs: ({ value }) => ({ sources: { some: { id: value } } })
        })
        id: number
    }

    return GetSourceIdDto
}

export class GetViewerSourceIdDto extends GetPermittedSourceIdDto(PermissionType.VIEWER) { }
export class GetManagerSourceIdDto extends GetPermittedSourceIdDto(PermissionType.MANAGER) { }