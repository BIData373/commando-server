import { Type } from "class-transformer"
import { IId } from "../../../types"
import { EntityExists, IEntityExistsValidationOptions, Models } from "../../decorators/entity-exists.decorator"
import { IsPositiveInt } from "../../decorators/is-positive-int.decorator"
import { GetContextDto } from "./get-context.dto"

export function GetIdDto<TModel extends Models>(
    model: TModel,
    options: IEntityExistsValidationOptions<IId, 'id', TModel> = {}
) {
    class GetIdDtoClass extends GetContextDto<{ [options.context]: TModel }> implements IId {
        @Type(() => Number)
        @EntityExists(model, options)
        @IsPositiveInt()
        id: number
    }

    return GetIdDtoClass
}