import { Exclude } from "class-transformer"
import { ExposeProperty } from "../../../../common/decorators/expose-property.decorator"

@Exclude()
export class AssigneeStatusDto {
    @ExposeProperty()
    assigneeId: number

    @ExposeProperty()
    statusId: number
}