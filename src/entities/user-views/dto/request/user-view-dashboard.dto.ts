import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsEnum, IsString } from "class-validator";
import { DistributionTab } from "../../enum/distribution-tab";
import { QuickFilter } from "../../enum/quick-filter";

export class UserViewDashboardDto {
    @ApiProperty({ enum: DistributionTab, enumName: "DistributionTab" })
    @IsEnum(DistributionTab)
    distributionTab: DistributionTab;

    @ApiProperty({ enum: QuickFilter, enumName: "QuickFilter" })
    @IsEnum(QuickFilter)
    focusedInstructionsTab: QuickFilter;

    @ApiProperty({ type: [String] })
    @IsArray()
    @IsString({ each: true })
    assigneeFilter: string[];
}
