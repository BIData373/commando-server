import { Type } from "class-transformer";
import { EntityExists } from "../../../../common/decorators/entity-exists.decorator";
import { IsPositiveInt } from "../../../../common/decorators/is-positive-int.decorator";

export class GetMessageIdFieldDto {
    @Type(() => Number)
    @IsPositiveInt()
    @EntityExists('message')
    messageId: number
}