import { ApiProperty } from "@nestjs/swagger";
import { IdExists } from "../../../../common/decorators/id-exists.decorator";
import { IsIdPermitted } from "../../../../common/decorators/is-permitted-id.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { IContext } from "../../../../common/interfaces/context.interface";
import { PermissionType } from "../../../../types/prisma";
import { IUserContext } from "../../../user/interfaces/user-context.interface";
import { IWorkspaceContext, IWorkspaceWithPermissionContext } from "../../interfaces/workspace-context.interface";

export class GetWorkspaceIdFieldDto {
  @ApiProperty()
  @IdExists('workspace', { filterDeletedAt: true })
  workspaceId: number
}

interface IWorkspaceId extends IContext<IUserContext & IWorkspaceContext> {
  workspaceId: number
}

export function GetPermittedWorkspaceIdFieldDto(type: PermissionType) {
  class GetWorkspaceIdDto extends GetContextDto<IUserContext & IWorkspaceWithPermissionContext> {
    @ApiProperty()
    @IsIdPermitted('workspace', type, {
      findArgs: ({ obj, value }) => ({
        where: { id: value },
        include: {
          permissions: {
            where: {
              userId: obj.context.user.id
            }
          }
        }

      }),
      filterDeletedAt: true,
      contextField: 'workspace'
    })
    workspaceId: number
  }

  return GetWorkspaceIdDto
}

export class GetViewerWorkspaceIdFieldDto extends GetPermittedWorkspaceIdFieldDto(PermissionType.VIEWER) { }
export class GetManagerWorkspaceIdFieldDto extends GetPermittedWorkspaceIdFieldDto(PermissionType.MANAGER) { }