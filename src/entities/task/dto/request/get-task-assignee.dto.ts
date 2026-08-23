import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsOptional, IsString } from "class-validator"
import { EntityExists } from "../../../../common/decorators/entity-exists.decorator"
import { IdExists } from "../../../../common/decorators/id-exists.decorator"
import { GetContextDto } from "../../../../common/dto/request/get-context.dto"
import { IWorkspaceIdContext } from "../../../workspace/interfaces/workspace-id-context"

export class GetTaskAssigneeDto extends GetContextDto<IWorkspaceIdContext> {
  @ApiProperty()
  @EntityExists('assignee', {
    validateIf: ({ obj }) => !!obj.context?.workspaceId,
    findArgs: ({ value, obj }) => ({
      where: { id: value, workspaceId: obj.context.workspaceId }
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