import { IsIdPermitted } from "../../../../common/decorators/is-permitted-id.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { PermissionType } from "../../../../types";
import { IUserContext } from "../../../user/interfaces/user-context.interface";

export function GetPermittedMessageIdDto(type: PermissionType) {
    class GetMessageIdDto extends GetContextDto<IUserContext> {
        @IsIdPermitted('message', type)
        id: number
    }

    return GetMessageIdDto
}

export class GetViewerMessageIdDto extends GetPermittedMessageIdDto(PermissionType.VIEWER) { }
export class GetManagerMessageIdDto extends GetPermittedMessageIdDto(PermissionType.MANAGER) { }