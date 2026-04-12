import { Type } from "class-transformer";
import { EntityExists } from "../../../../common/decorators/entity-exists.decorator";
import { IsPositiveInt } from "../../../../common/decorators/is-positive-int.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { IQuery } from "../../../../common/interfaces/query.interface";
import { IDeletePermission, IUser, PermissionType } from "../../../../types";
import { HasWorkspacePermission } from "../../../workspace/decorators/has-workspace-permission.decorator";

export class DeletePermissionDto extends GetContextDto<IQuery<IUser>> implements IDeletePermission {
    @Type(() => Number)
    @EntityExists('user')
    @IsPositiveInt()
    userId: number;

    @Type(() => Number)
    @HasWorkspacePermission(PermissionType.VIEWER, obj => obj.userId, {
        message: ({ value, object }) => (
            `Permission doesn't exist for user ${(object as IDeletePermission).userId} in workspace ${value}`
        )
    })
    @HasWorkspacePermission(PermissionType.MANAGER, obj => obj.context.query.id, { forbidden: true })
    @EntityExists('workspace')
    @IsPositiveInt()
    workspaceId: number;
}