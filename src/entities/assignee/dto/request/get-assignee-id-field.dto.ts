import { FORBIDDEN_MESSAGE } from "@nestjs/core/guards";
import { ApiProperty, PartialType } from "@nestjs/swagger";
import { merge } from "lodash";
import { IdExists } from "../../../../common/decorators/id-exists.decorator";
import { IIsIdPermittedOptions, IsIdPermitted } from "../../../../common/decorators/is-permitted-id.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { IContext } from "../../../../common/interfaces/context.interface";
import { PermissionType } from "../../../../types/prisma";
import { ITaskContext } from "../../../task/interfaces/task.interface";
import { IUserContext } from "../../../user/interfaces/user-context.interface";
import { IAssigneeId } from "../../interfaces/assignee-id.interface";

export class GetAssignedAssigneeIdFieldDto extends GetContextDto<IUserContext & ITaskContext> {
    @ApiProperty()
    @IdExists('assignee', {
        message: FORBIDDEN_MESSAGE,
        validateIf: ({ obj }) => !obj.context.user.info?.isBI,
        findArgs: ({ obj, value }) => ({
            where: {
                id: value,
                deletedAt: null,
                users: { some: { id: obj.context.user.id } },
                workspace: { tasks: { some: { id: obj.context.task.id } } }
            }
        })
    })
    @IdExists('assignee', { filterDeletedAt: true })
    assigneeId: number
}

export class GetOptionalAssignedAssigneeIdFieldDto extends PartialType(GetAssignedAssigneeIdFieldDto) { }

export function GetPermittedAssigneeIdFieldDto<TContext extends object = {}>(
    type: PermissionType,
    { workspaceFindArgs, ...options }: IIsIdPermittedOptions<"assigneeId", "assignee", IAssigneeId & IContext<IUserContext & TContext>> = {}
) {
    class GetAssigneeIdFieldDto extends GetContextDto<IUserContext & TContext> {
        @ApiProperty()
        @IsIdPermitted('assignee', type, {
            filterDeletedAt: true,
            workspaceFindArgs: ({ value, obj }) => merge(
                { assignees: { some: { id: value } } },
                workspaceFindArgs?.({ value, obj })
            ),
            ...options
        })
        assigneeId: number
    }

    return GetAssigneeIdFieldDto
}

export class GetViewerAssigneeIdFieldDto extends GetPermittedAssigneeIdFieldDto(PermissionType.VIEWER) { }
export class GetManagerAssigneeIdFieldDto extends GetPermittedAssigneeIdFieldDto(PermissionType.MANAGER) { }

export class GetManagerTaskAssigneeIdFieldDto extends GetPermittedAssigneeIdFieldDto<ITaskContext>(PermissionType.MANAGER, {
    workspaceFindArgs: ({ obj }) => ({
        tasks: { some: { id: obj.context.task.id, deletedAt: null } }
    })
}) { }
export class GetOptionalManagerTaskAssigneeIdFieldDto extends PartialType(GetManagerTaskAssigneeIdFieldDto) { }