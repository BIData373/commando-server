import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsEnum, IsObject, ValidateNested } from "class-validator";
import { QuickFilter } from "../../enum/quick-filter";
import { ColumnFilterDto } from "./column-filter.dto";
import { ColumnSortDto } from "./column-sort.dto";
import { ColumnVisibilityDto } from "./column-visibility.dto";

export class UserViewTableDto {
    @ApiProperty({ type: [ColumnSortDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ColumnSortDto)
    sorting: ColumnSortDto[];

    @ApiProperty({ type: [ColumnFilterDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ColumnFilterDto)
    columnFilters: ColumnFilterDto[];

    @ApiProperty({ enum: QuickFilter, enumName: "QuickFilter", isArray: true })
    @IsArray()
    @IsEnum(QuickFilter, { each: true })
    quickFilter: QuickFilter[];

    @ApiProperty({ type: ColumnVisibilityDto })
    @IsObject()
    @ValidateNested()
    @Type(() => ColumnVisibilityDto)
    columnVisibility: ColumnVisibilityDto;
}
