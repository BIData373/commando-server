import { Type } from "class-transformer";
import { EntityExists } from "../../../../common/decorators/entity-exists.decorator";
import { IsPositiveInt } from "../../../../common/decorators/is-positive-int.decorator";

export class GetAssigneeIdFieldDto {
    @Type(() => Number)
    @IsPositiveInt()
    @EntityExists('assignee')
    assigneeId: number
}