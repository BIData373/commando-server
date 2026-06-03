import { applyDecorators } from "@nestjs/common";
import { Type } from "class-transformer";
import { ExtractValue } from "../types/extract-value.type";
import { Models } from "../types/models.type";
import { EntityExists, IEntityExistsValidationOptions } from "./entity-exists.decorator";
import { IsPositiveInt } from "./is-positive-int.decorator";

export function IdExists<
    TModel extends Models,
    TDto extends Object,
    TDtoField extends keyof TDto,
    TDtoValue extends ExtractValue<TDto, TDtoField>
>(
    model: TModel,
    options: IEntityExistsValidationOptions<TDto, TDtoField, TDtoValue, TModel> = {}
) {
    return applyDecorators(
        Type(() => Number),
        EntityExists(model, options) as PropertyDecorator,
        IsPositiveInt(options)
    ) as (target: TDto, propertyKey?: TDtoField) => void
}