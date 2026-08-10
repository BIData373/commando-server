import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString } from "class-validator";

export class ColumnSortDto {
    @ApiProperty()
    @IsString()
    id: string;

    @ApiProperty()
    @IsBoolean()
    desc: boolean;
}
