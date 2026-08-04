import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsString } from "class-validator";

export class ColumnFilterDto {
    @ApiProperty()
    @IsString()
    id: string;

    @ApiProperty()
    @IsArray()
    @IsString({ each: true })
    value: string[];
}
