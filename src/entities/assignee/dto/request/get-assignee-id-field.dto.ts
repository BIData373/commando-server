import { IsIdPermitted } from "../../../../common/decorators/is-permitted-id.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { PermissionType } from "../../../../types";
import { IUserContext } from "../../../user/interfaces/user-context.interface";

export function GetPermittedAssigneeIdFieldDto(type: PermissionType) {
    class GetAssigneeIdDto extends GetContextDto<IUserContext> {
        @IsIdPermitted('assignee', type)
        assigneeId: number
    }

    return GetAssigneeIdDto
}

export class GetViewerAssigneeIdFieldDto extends GetPermittedAssigneeIdFieldDto(PermissionType.VIEWER) { }
export class GetManagerAssigneeIdFieldDto extends GetPermittedAssigneeIdFieldDto(PermissionType.MANAGER) { }