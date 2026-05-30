import { ApiProperty } from "@nestjs/swagger";
import { EntityExists } from "../../../../common/decorators/entity-exists.decorator";
import { IdExists } from "../../../../common/decorators/id-exists.decorator";
import { IsIdPermitted } from "../../../../common/decorators/is-permitted-id.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { PermissionType } from "../../../../types/prisma";
import { IUserContext } from "../../../user/interfaces/user-context.interface";
import { GetWorkspaceIdFieldDto } from "../../../workspace/dto/request/get-workspace-id-field.dto";

export class DeletePermissionDto extends GetContextDto<IUserContext> {
    @ApiProperty()
    @EntityExists('permission', {
        findArgs: ({ value, obj }) => ({
            where: {
                userId: value,
                workspaceId: obj.workspaceId
            }
        }),
        message: ({ value, object }) => (
            `Permission doesn't exist for user id ${value} in workspace id ${(object as GetWorkspaceIdFieldDto).workspaceId}`
        )
    })
    @IdExists('user')
    userId: number;

    @ApiProperty()
    @IsIdPermitted('workspace', PermissionType.MANAGER, { filterDeletedAt: true })
    workspaceId: number;
}