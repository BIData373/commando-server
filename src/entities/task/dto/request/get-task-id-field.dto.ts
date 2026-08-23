import { ApiProperty } from "@nestjs/swagger";
import { IdExists } from "../../../../common/decorators/id-exists.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { PermissionType } from "../../../../types/prisma";
import { IUserContext } from "../../../user/interfaces/user-context.interface";
import { CheckForAssignee, findArgsInPermittedTask } from "../../functions/task-args";

export function GetPermittedTaskIdFieldDto<TDto>(
    type: PermissionType,
    checkForAssignee: CheckForAssignee<TDto> = false
) {
    class GetTaskIdDto extends GetContextDto<IUserContext> {
        @ApiProperty()
        @IdExists('task', findArgsInPermittedTask({
            type,
            checkForAssignee: checkForAssignee && (
                typeof checkForAssignee === 'function'
                    ? obj => checkForAssignee(obj as TDto)
                    : true
            )
        }))
        @IdExists('task', { filterDeletedAt: true })
        taskId: number
    }

    return GetTaskIdDto
}

export class GetViewerTaskIdFieldDto extends GetPermittedTaskIdFieldDto(PermissionType.VIEWER, true) { }
export class GetManagerTaskIdFieldDto extends GetPermittedTaskIdFieldDto(PermissionType.MANAGER) { }