import { IdExists } from "../../../../common/decorators/id-exists.decorator";
import { IsIdPermitted } from "../../../../common/decorators/is-permitted-id.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { PermissionType } from "../../../../types";
import { IUserContext } from "../../../user/interfaces/user-context.interface";

export class GetTaskIdFieldDto {
    @IdExists('task')
    taskId: number
}

export function GetPermittedTaskIdFieldDto(type: PermissionType) {
    class GetTaskIdDto extends GetContextDto<IUserContext> {
        @IsIdPermitted('task', type)
        taskId: number
    }

    return GetTaskIdDto
}

export class GetViewerTaskIdFieldDto extends GetPermittedTaskIdFieldDto(PermissionType.VIEWER) { }
export class GetManagerTaskIdFieldDto extends GetPermittedTaskIdFieldDto(PermissionType.MANAGER) { }