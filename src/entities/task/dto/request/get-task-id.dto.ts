import { ApiProperty } from "@nestjs/swagger"
import { GetContextDto } from "../../../../common/dto/request/get-context.dto"
import { PermissionType } from "../../../../types/prisma"
import { IUserContext } from "../../../user/interfaces/user-context.interface"
import { IsPermittedTaskId } from "../../decorators/is-permitted-task-id.decorator"
import { CheckForAssignee } from "../../functions/task-args"
import { ITaskContext } from "../../interfaces/task.interface"

export function GetPermittedTaskIdDto<TDto>(
    type: PermissionType,
    checkForAssignee: CheckForAssignee<TDto> = false
) {
    class GetTaskIdDto extends GetContextDto<IUserContext & ITaskContext> {
        @ApiProperty()
        @IsPermittedTaskId<TDto>(type, checkForAssignee, 'task')
        id: number
    }

    return GetTaskIdDto
}

export class GetViewerTaskIdDto extends GetPermittedTaskIdDto(PermissionType.VIEWER, true) { }
export class GetManagerTaskIdDto extends GetPermittedTaskIdDto(PermissionType.MANAGER) { }
