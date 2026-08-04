import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsOptional } from "class-validator";

export class GetFilterIsArchived {
    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    isArchived?: boolean
}