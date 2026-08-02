import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsObject, ValidateNested } from "class-validator";
import { UserViewDashboardDto } from "./user-view-dashboard.dto";
import { UserViewTableDto } from "./user-view-table.dto";

export class UserViewDto {
    @ApiProperty({ type: UserViewTableDto })
    @IsObject()
    @ValidateNested()
    @Type(() => UserViewTableDto)
    table: UserViewTableDto;

    @ApiProperty({ type: UserViewDashboardDto })
    @IsObject()
    @ValidateNested()
    @Type(() => UserViewDashboardDto)
    dashboard: UserViewDashboardDto;
}
