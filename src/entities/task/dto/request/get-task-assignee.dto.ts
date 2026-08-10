import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsOptional, IsString } from "class-validator"
import { EntityExists } from "../../../../common/decorators/entity-exists.decorator"
import { IdExists } from "../../../../common/decorators/id-exists.decorator"
import { IsPositiveInt } from "../../../../common/decorators/is-positive-int.decorator"
import { GetContextDto } from "../../../../common/dto/request/get-context.dto"
import { IWorkspaceContext } from "../../../workspace/interfaces/workspace-context.interface"

export class GetTaskAssigneeDto extends GetContextDto<IWorkspaceContext> {
  @ApiProperty()
  // Only runs when context.workspace was pre-populated for us (e.g. by
  // SourceController.create's AddDtosToContext interceptor). Absent that,
  // this is a no-op and the @IdExists check below still applies.
  @EntityExists('assignee', {
    validateIf: ({ obj }) => !!obj.context?.workspace,
    findArgs: ({ value, obj }) => ({
      where: { id: value, workspaceId: obj.context.workspace.id }
    })
  })
  @IdExists('assignee', {
    findArgs: ({ obj, value }) => ({
      where: {
        id: value,
        workspace: { assignees: { some: { id: obj.id } } }
      }
    })
  })
  @Type(() => Number)
  id: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IdExists('workspaceStatus', {
    findArgs: ({ obj, value }) => ({
      where: {
        id: value,
        workspace: { assignees: { some: { id: obj.id } } }
      }
    })
  })
  statusId?: number;
}