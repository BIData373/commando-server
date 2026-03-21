import { EntityExists } from "../../../../common/decorators/entity-exists.decorator";
import { IsPositiveInt } from "../../../../common/decorators/is-positive-int.decorator";

export class GetAssigneeIdFieldDto {
    @IsPositiveInt()
    @EntityExists('assignee')
    assigneeId: number
}