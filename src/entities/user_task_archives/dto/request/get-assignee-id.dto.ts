import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, IsPostalCode } from "class-validator";
import { IsPositiveInt } from "../../../../common/decorators/is-positive-int.decorator";
import { IdExists } from "../../../../common/decorators/id-exists.decorator";

export class GetAssiggneeIdDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsPositiveInt()
  @IdExists('assignee', { filterDeletedAt: true })
  assigneeId?: number
}