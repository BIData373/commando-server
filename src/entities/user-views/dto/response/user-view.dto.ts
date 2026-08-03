import { Exclude, Type } from "class-transformer";
import { ExposeProperty } from "../../../../common/decorators/expose-property.decorator";
import { ViewDto } from "./view.dto";

@Exclude()
export class UserViewDto {

    @ExposeProperty({ type: ViewDto })
    @Type(() => ViewDto)
    view: ViewDto;
}
