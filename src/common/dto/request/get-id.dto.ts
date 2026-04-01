import { Type } from "class-transformer"
import { EntityExists, IEntityExistsValidationOptions } from "../../decorators/entity-exists.decorator"
import { IsPositiveInt } from "../../decorators/is-positive-int.decorator"
import { PrismaService } from "../../prisma.service"
import { GetContextDto } from "./get-context.dto"

export function GetIdDto<TModel>(
    model: keyof PrismaService,
    options: IEntityExistsValidationOptions = {}
) {
    class GetIdDtoClass extends GetContextDto<{ [options.context]: TModel }> {
        @Type(() => Number)
        @EntityExists(model, options)
        @IsPositiveInt()
        id: number
    }

    return GetIdDtoClass
}