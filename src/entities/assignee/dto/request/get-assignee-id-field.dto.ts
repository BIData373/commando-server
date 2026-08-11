import { FORBIDDEN_MESSAGE } from "@nestjs/core/guards";
import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IdExists } from "../../../../common/decorators/id-exists.decorator";
import { IsIdPermitted } from "../../../../common/decorators/is-permitted-id.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { PermissionType } from "../../../../types/prisma";
import { IUserContext } from "../../../user/interfaces/user-context.interface";

export class GetAssignedAssigneeIdFieldDto extends GetContextDto<IUserContext> {
    @ApiProperty()
    @IdExists('assignee', {
        message: FORBIDDEN_MESSAGE,
        validateIf: ({ obj }) => !obj.context.user.info?.isBI,
        findArgs: ({ obj, value }) => ({
            where: {
                id: value,
                deletedAt: null,
                assignees: {
                    some: {
                        deletedAt: null,
                        users: { some: { id: obj.context.user.id } }
                    }
                }
            }
        })
    })
    @IdExists('assignee', { filterDeletedAt: true })
    assigneeId: number
}

export class GetOptionalAssignedAssigneeIdFieldDto extends PartialType(GetAssignedAssigneeIdFieldDto) { }

export function GetPermittedAssigneeIdFieldDto(type: PermissionType) {
    class GetAssigneeIdFieldDto extends GetContextDto<IUserContext> {
        @ApiProperty()
        @IsIdPermitted('assignee', type, {
            filterDeletedAt: true,
            workspaceFindArgs: ({ value }) => ({ assignees: { some: { id: value } } })
        })
        assigneeId: number
    }

    return GetAssigneeIdFieldDto
}

export class GetViewerAssigneeIdFieldDto extends GetPermittedAssigneeIdFieldDto(PermissionType.VIEWER) { }
export class GetManagerAssigneeIdFieldDto extends GetPermittedAssigneeIdFieldDto(PermissionType.MANAGER) { }
export class GetOptionalManagerAssigneeIdFieldDto extends PartialType(GetManagerAssigneeIdFieldDto) { }