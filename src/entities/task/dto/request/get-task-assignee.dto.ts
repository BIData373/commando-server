import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsOptional, IsString } from "class-validator"
import { IdExists } from "../../../../common/decorators/id-exists.decorator"
import { IsPositiveInt } from "../../../../common/decorators/is-positive-int.decorator"

export class GetTaskAssigneeDto {
  @ApiProperty()
  @IsPositiveInt()
  @Type(() => Number)
  id: number

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string

  @ApiProperty()
  @IdExists('workspaceStatus', {
    findArgs: ({ obj, value }) => ({
      where: {
        id: value,
        workspace: { assignees: { some: { id: obj.id } } }
      }
    })
  })
  statusId: number;
}