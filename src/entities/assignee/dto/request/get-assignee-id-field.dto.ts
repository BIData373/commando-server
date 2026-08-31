import { ApiProperty } from "@nestjs/swagger";
import { merge } from "lodash";
import { IIsIdPermittedOptions, IsIdPermitted } from "../../../../common/decorators/is-permitted-id.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { IContext } from "../../../../common/interfaces/context.interface";
import { PermissionType } from "../../../../types/prisma";
import { IUserContext } from "../../../user/interfaces/user-context.interface";
import { IAssigneeId } from "../../interfaces/assignee-id.interface";

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
