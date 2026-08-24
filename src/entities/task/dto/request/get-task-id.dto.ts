import { ApiProperty } from "@nestjs/swagger";
import { IdExists } from "../../../../common/decorators/id-exists.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { PermissionType } from "../../../../types/prisma";
import { IUserContext } from "../../../user/interfaces/user-context.interface";
import { CheckForAssignee, findArgsInPermittedTask } from "../../functions/task-args";
import { ITaskContext } from "../../interfaces/task.interface";

export function GetPermittedTaskIdDto<TDto>(
    type: PermissionType,
    checkForAssignee: CheckForAssignee<TDto> = false
) {
    class GetTaskIdDto extends GetContextDto<IUserContext & ITaskContext> {
        @ApiProperty()
        @IdExists('task', findArgsInPermittedTask({
            type,
            checkForAssignee: checkForAssignee && (
                typeof checkForAssignee === 'function'
                    ? obj => checkForAssignee(obj as TDto)
                    : true
            )
        }))
        @IdExists('task', { filterDeletedAt: true, contextField: 'task' })
        id: number
    }

    return GetTaskIdDto
}

export class GetViewerTaskIdDto extends GetPermittedTaskIdDto(PermissionType.VIEWER, true) { }
export class GetManagerTaskIdDto extends GetPermittedTaskIdDto(PermissionType.MANAGER) { }