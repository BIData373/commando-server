import { IsIdPermitted } from "../../../../common/decorators/is-permitted-id.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { PermissionType } from "../../../../types/prisma";
import { IUserContext } from "../../../user/interfaces/user-context.interface";
import { ITaskContext } from "../../interfaces/task.interface";

export function GetPermittedTaskIdDto(type: PermissionType) {
    class GetTaskIdDto extends GetContextDto<IUserContext & ITaskContext> {
        @IsIdPermitted('task', type, {
            filterDeletedAt: true,
            contextField: 'task'
        })
        id: number
    }

    return GetTaskIdDto
}

export class GetViewerTaskIdDto extends GetPermittedTaskIdDto(PermissionType.VIEWER) { }
export class GetManagerTaskIdDto extends GetPermittedTaskIdDto(PermissionType.MANAGER) { }