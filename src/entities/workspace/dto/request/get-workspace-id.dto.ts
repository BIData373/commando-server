import { Type } from "class-transformer";
import { EntityExists } from "../../../../common/decorators/entity-exists.decorator";
import { IsPositiveInt } from "../../../../common/decorators/is-positive-int.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { GetIdDto } from "../../../../common/dto/request/get-id.dto";
import { IUser } from "../../../../types";
import { PermissionType, Workspace } from "../../../../types/prisma";
import { allowedTypes } from "../../../permission/guards/permission.guard";

interface IWorkspaceContext {
    workspace: Workspace
}

function GetPermittedWorkspaceIdMixin(type: PermissionType) {
    class GetWorkspaceIdDto extends GetContextDto<IWorkspaceContext & IUser> {
        @Type(() => Number)
        @EntityExists('permission', {
            unauthorized: true,
            findArgs: ({ value, obj }) => ({
                where: {
                    type: { in: allowedTypes[type] },
                    userId_workspaceId: {
                        userId: obj.context.id,
                        workspaceId: value
                    }
                }
            })
        })
        @EntityExists('workspace')
        @IsPositiveInt()
        id: number
    }

    return GetWorkspaceIdDto
}

export class GetWorkspaceIdDto extends GetIdDto('workspace') { }
export class GetViewerWorkspaceIdDto extends GetPermittedWorkspaceIdMixin(PermissionType.VIEWER) { }
export class GetManagerWorkspaceIdDto extends GetPermittedWorkspaceIdMixin(PermissionType.MANAGER) { }