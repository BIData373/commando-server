import { applyDecorators } from "@nestjs/common";
import { Type } from "class-transformer";
import { EntityExists, IEntityExistsValidationOptions, Models } from "./entity-exists.decorator";
import { IsPositiveInt } from "./is-positive-int.decorator";

export function IdExists<
    TModel extends Models,
    TDto extends Object,
    TDtoField extends keyof TDto,
// TContext extends Object,
// TContextField extends keyof TContext,
>(
    model: TModel,
    options: IEntityExistsValidationOptions<TDto, TDtoField, TModel> = {}
) {
    return applyDecorators(
        Type(() => Number),
        EntityExists(model, options) as PropertyDecorator,
        IsPositiveInt(options)
    )
}