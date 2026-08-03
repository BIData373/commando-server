import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ColumnFilterDto {
    @ApiProperty()
    @IsString()
    id: string;

    @ApiProperty()
    @IsString()
    value: string;
}
