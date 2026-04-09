import { applyDecorators } from "@nestjs/common";
import { IsNotEmpty, IsString, ValidationOptions } from "class-validator";

export function IsNotEmptyString(validationOptions?: ValidationOptions) {
    return applyDecorators(
        IsNotEmpty(validationOptions),
        IsString(validationOptions)
    )
}