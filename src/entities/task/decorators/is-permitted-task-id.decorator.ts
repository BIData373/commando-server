import { applyDecorators } from "@nestjs/common"
import { IdExists } from "../../../common/decorators/id-exists.decorator"
import { IContext } from "../../../common/interfaces/context.interface"
import { PermissionType } from "../../../types/prisma"
import { IUserContext } from "../../user/interfaces/user-context.interface"
import { CheckForAssignee, findArgsInPermittedTask } from "../functions/task-args"

interface IIPermittedTaskId extends IContext<IUserContext> {
    taskId: number
}

export function IsPermittedTaskId<TDto>(
    type: PermissionType,
    checkForAssignee: CheckForAssignee<TDto> = false,
    contextField?: string
): PropertyDecorator {
    return applyDecorators(
        IdExists<'task', IIPermittedTaskId, 'taskId', number>(
            'task',
            findArgsInPermittedTask<'taskId', IIPermittedTaskId>({
                type,
                checkForAssignee: checkForAssignee && (
                    typeof checkForAssignee === 'function'
                        ? obj => checkForAssignee(obj as TDto)
                        : true
                )
            })
        ) as PropertyDecorator,
        IdExists<'task', IIPermittedTaskId, 'taskId', number>(
            'task',
            { filterDeletedAt: true, contextField }
        ) as PropertyDecorator
    )
}
