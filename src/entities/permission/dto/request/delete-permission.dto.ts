import { Type } from "class-transformer";
import { EntityExists } from "../../../../common/decorators/entity-exists.decorator";
import { IsPositiveInt } from "../../../../common/decorators/is-positive-int.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { IQuery } from "../../../../common/interfaces/query.interface";
import { IDeletePermission, IUser, PermissionType } from "../../../../types";
import { IUserContext } from "../../../user/interfaces/user-context.interface";
import { HasWorkspacePermission } from "../../../workspace/decorators/has-workspace-permission.decorator";

export class DeletePermissionDto extends GetContextDto<IUserContext & IQuery<IUser>> implements IDeletePermission {
    @Type(() => Number)
    @EntityExists('permission', {
        findArgs: ({ value, obj }) => ({
            where: {
                userId_workspaceId: {
                    userId: value,
                    workspaceId: obj.workspaceId
                }
            }
        }),
        message: ({ value, object }) => (
            `Permission doesn't exist for user id ${value} in workspace id ${(object as IDeletePermission).workspaceId}`
        )
    })
    @EntityExists('user', { contextField: 'user' })
    @IsPositiveInt()
    userId: number;

    @Type(() => Number)
    @HasWorkspacePermission(PermissionType.MANAGER, obj => obj.context.user, { forbidden: true })
    @EntityExists('workspace')
    @IsPositiveInt()
    workspaceId: number;
}