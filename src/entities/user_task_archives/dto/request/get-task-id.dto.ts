import { ApiProperty } from "@nestjs/swagger"
import { IdExists } from "../../../../common/decorators/id-exists.decorator"
import { GetContextDto } from "../../../../common/dto/request/get-context.dto"
import { IUserContext } from "../../../user/interfaces/user-context.interface"
import { ITaskContext } from "../../../task/interfaces/task.interface"
import { PermissionType } from "../../../../types/prisma"
import { findArgsInPermittedTask } from "../../../task/functions/task-find-args"

export function GetTaskIdForArchiveDto(
    type?: PermissionType
) {
    class GetTaskIdDto extends GetContextDto<IUserContext & ITaskContext> {
        @ApiProperty()
        @IdExists('task', type && findArgsInPermittedTask({
            type
        }))
        @IdExists('task', { filterDeletedAt: true, contextField: 'task' })
        id: number
    }

    return GetTaskIdDto
}

export class GetTaskArchiveTaskIdDto extends GetTaskIdForArchiveDto() { }
export class GetManagerArchiveTaskIdDto extends GetTaskIdForArchiveDto(PermissionType.MANAGER) { }