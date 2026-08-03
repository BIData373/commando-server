import { Exclude, Type } from "class-transformer";
import { ExposeProperty } from "../../../../common/decorators/expose-property.decorator";
import { UserViewTableDto } from "../request/user-view-table.dto";
import { UserViewDashboardDto } from "../request/user-view-dashboard.dto";

@Exclude()
export class ViewDto {

    @ExposeProperty({ type: UserViewTableDto })
    @Type(() => UserViewTableDto)
    table: UserViewTableDto;

    @ExposeProperty({ type: UserViewDashboardDto })
    @Type(() => UserViewDashboardDto)
    dashboard: UserViewDashboardDto;
}