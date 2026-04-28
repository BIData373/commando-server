import { EntityExists } from "../../../../common/decorators/entity-exists.decorator";
import { IdExists } from "../../../../common/decorators/id-exists.decorator";
import { IsIdPermitted } from "../../../../common/decorators/is-permitted-id.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { IDeletePermission, PermissionType } from "../../../../types";
import { User } from "../../../../types/prisma";
import { IUserContext } from "../../../user/interfaces/user-context.interface";

interface IDeletePermissionContext extends IUserContext {
    newUser: User
}

export class DeletePermissionDto extends GetContextDto<IDeletePermissionContext> implements IDeletePermission {
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
    @IdExists('user', { contextField: 'newUser' })
    userId: number;

    @IsIdPermitted('workspace', PermissionType.MANAGER)
    workspaceId: number;
}