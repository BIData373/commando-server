import { FORBIDDEN_MESSAGE } from "@nestjs/core/guards";
import { ApiProperty } from "@nestjs/swagger";
import { IdExists } from "../../../../common/decorators/id-exists.decorator";
import { IsIdPermitted } from "../../../../common/decorators/is-permitted-id.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { PermissionType } from "../../../../types/prisma";
import { allowedTypes } from "../../../permission/consts/permission-types";
import { IUserContext } from "../../../user/interfaces/user-context.interface";
import { IWorkspaceWithPermissionContext } from "../../interfaces/workspace-context.interface";

export class GetWorkspaceIdFieldDto {
  @ApiProperty()
  @IdExists('workspace', { filterDeletedAt: true })
  workspaceId: number
}

export class GetAssignedWorkspaceIdDto extends GetContextDto<IUserContext> {
    @ApiProperty()
    @IdExists('workspace', {
        message: FORBIDDEN_MESSAGE,
        validateIf: ({ obj }) => !obj.context.user.info?.isBI,
        findArgs: ({ obj, value }) => ({
            where: {
                id: value,
                deletedAt: null,
                OR: [
                    {
                        permissions: {
                            some: {
                                userId: obj.context.user.id,
                                type: { in: allowedTypes[PermissionType.VIEWER] }
                            }
                        }
                    },
                    {
                        assignees: {
                            some: {
                                deletedAt: null,
                                users: { some: { id: obj.context.user.id } }
                            }
                        }
                    }
                ]
            }
        })
    })
    @IdExists('workspace', { filterDeletedAt: true })
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