import { IsIdPermitted } from "../../../../common/decorators/is-permitted-id.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { PermissionType } from "../../../../types";
import { IUserContext } from "../../../user/interfaces/user-context.interface";

export function GetPermittedTaskIdDto(type: PermissionType) {
    class GetTaskIdDto extends GetContextDto<IUserContext> {
        @IsIdPermitted('task', type)
        id: number
    }

    return GetTaskIdDto
}

export class GetViewerTaskIdDto extends GetPermittedTaskIdDto(PermissionType.VIEWER) { }
export class GetManagerTaskIdDto extends GetPermittedTaskIdDto(PermissionType.MANAGER) { }