import { applyDecorators } from "@nestjs/common";
import { Type } from "class-transformer";
import { Models } from "../types/models.type";
import { EntityExists, IEntityExistsValidationOptions } from "./entity-exists.decorator";
import { IsPositiveInt } from "./is-positive-int.decorator";

export function IdExists<
    TModel extends Models,
    TDto extends Object,
    TDtoField extends keyof TDto
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