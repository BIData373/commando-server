import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { IdExists } from "../../../../common/decorators/id-exists.decorator";

export class GetOptionalAssiggneeIdDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IdExists('assignee', { filterDeletedAt: true })
  assigneeId?: number
}