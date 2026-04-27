import { Type } from "class-transformer";
import { EntityExists } from "../../../../common/decorators/entity-exists.decorator";
import { IsPositiveInt } from "../../../../common/decorators/is-positive-int.decorator";

// FIX Add permission check
export class GetTaskIdFieldDto {
    @Type(() => Number)
    @EntityExists('task')
    @IsPositiveInt()
    taskId: number
}