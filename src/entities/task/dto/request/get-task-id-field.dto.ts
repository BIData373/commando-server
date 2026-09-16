import { ApiProperty } from "@nestjs/swagger"
import { GetContextDto } from "../../../../common/dto/request/get-context.dto"
import { PermissionType } from "../../../../types/prisma"
import { IUserContext } from "../../../user/interfaces/user-context.interface"
import { IsPermittedTaskId } from "../../decorators/is-permitted-task-id.decorator"
import { CheckForAssignee } from "../../functions/task-args"

export function GetPermittedTaskIdFieldDto<TDto>(
    type: PermissionType,
    checkForAssignee: CheckForAssignee<TDto> = false
) {
    class GetTaskIdDto extends GetContextDto<IUserContext> {
        @ApiProperty()
        @IsPermittedTaskId<TDto>(type, checkForAssignee)
        taskId: number
    }

    return GetTaskIdDto
}

export class GetViewerTaskIdFieldDto extends GetPermittedTaskIdFieldDto(PermissionType.VIEWER, true) { }
export class GetManagerTaskIdFieldDto extends GetPermittedTaskIdFieldDto(PermissionType.MANAGER) { }
