import { ApiProperty } from "@nestjs/swagger";
import { EntityExists } from "../../../../common/decorators/entity-exists.decorator";
import { IdExists } from "../../../../common/decorators/id-exists.decorator";
import { IsIdPermitted } from "../../../../common/decorators/is-permitted-id.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { IDeletePermission, PermissionType } from "../../../../types";
import { IUserContext } from "../../../user/interfaces/user-context.interface";

export class DeletePermissionDto extends GetContextDto<IUserContext> implements IDeletePermission {
    @ApiProperty()
    @EntityExists('permission', {
        findArgs: ({ value, obj }) => ({
            where: {
                userId: value,
                workspaceId: obj.workspaceId
            }
        }),
        message: ({ value, object }) => (
            `Permission doesn't exist for user id ${value} in workspace id ${(object as IDeletePermission).workspaceId}`
        )
    })
    @IdExists('user')
    userId: number;

    @ApiProperty()
    @IsIdPermitted('workspace', PermissionType.MANAGER)
    workspaceId: number;
}