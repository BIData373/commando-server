import { Exclude, Type } from "class-transformer"
import { ExposeProperty } from "../../../../common/decorators/expose-property.decorator"
import { AssigneeDto } from "../../../assignee/dto/response/assignee.dto"

@Exclude()
export class AssigneeStatusDto {
    @ExposeProperty({ type: AssigneeDto })
    @Type(() => AssigneeDto)
    assignee: AssigneeDto

    @ExposeProperty()
    statusId: number
}