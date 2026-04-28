import { IsIdPermitted } from "../../../../common/decorators/is-permitted-id.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { GetIdDto } from "../../../../common/dto/request/get-id.dto";
import { PermissionType } from "../../../../types";
import { IUserContext } from "../../../user/interfaces/user-context.interface";

export function GetPermittedAssigneeIdDto(type: PermissionType) {
    class GetAssigneeIdDto extends GetContextDto<IUserContext> {
        @IsIdPermitted('assignee', type)
        id: number
    }

    return GetAssigneeIdDto
}

export class GetAssigneeIdDto extends GetIdDto('assignee') { }

export class GetViewerAssigneeIdDto extends GetPermittedAssigneeIdDto(PermissionType.VIEWER) { }
export class GetManagerAssigneeIdDto extends GetPermittedAssigneeIdDto(PermissionType.MANAGER) { }