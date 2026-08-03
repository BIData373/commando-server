import { ApiProperty } from "@nestjs/swagger";
import { IsEnum } from "class-validator";
import { DistributionTab } from "../../enum/distribution-tab";
import { QuickFilter } from "../../enum/quick-filter";

export class UserViewDashboardDto {
    @ApiProperty({ enum: DistributionTab, enumName: "DistributionTab" })
    @IsEnum(DistributionTab)
    distributionTab: DistributionTab;

    @ApiProperty({ enum: QuickFilter, enumName: "QuickFilter" })
    @IsEnum(QuickFilter)
    focusedInstructionsTab: QuickFilter;
}
