import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsString } from "class-validator";

export class ColumnVisibilityDto {
    @ApiProperty({ type: [String] })
    @IsArray()
    @IsString({ each: true })
    columnOrder: string[];

    @ApiProperty({ type: [String] })
    @IsArray()
    @IsString({ each: true })
    hiddenColumns: string[];
}
