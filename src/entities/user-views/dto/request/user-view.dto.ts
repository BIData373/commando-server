import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { UserViewDashboardDto } from "./user-view-dashboard.dto";
import { UserViewTableDto } from "./user-view-table.dto";

export class UserViewDto {
    @ApiProperty({ type: UserViewTableDto })
    @ValidateNested()
    @Type(() => UserViewTableDto)
    table: UserViewTableDto;

    @ApiProperty({ type: UserViewDashboardDto })
    @ValidateNested()
    @Type(() => UserViewDashboardDto)
    dashboard: UserViewDashboardDto;
}
