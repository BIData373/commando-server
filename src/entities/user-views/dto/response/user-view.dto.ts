import { Exclude, Type } from "class-transformer";
import { ExposeProperty } from "../../../../common/decorators/expose-property.decorator";
import { UserViewDashboardDto } from "../request/user-view-dashboard.dto";
import { UserViewTableDto } from "../request/user-view-table.dto";

@Exclude()
export class UserViewDto {
    
    @ExposeProperty({ type: UserViewTableDto })
    @Type(() => UserViewTableDto)
    table: UserViewTableDto;

    @ExposeProperty({ type: UserViewDashboardDto })
    @Type(() => UserViewDashboardDto)
    dashboard: UserViewDashboardDto;
}
