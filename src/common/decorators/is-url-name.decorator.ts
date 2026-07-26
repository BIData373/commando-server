import { applyDecorators } from "@nestjs/common";
import { Matches, MaxLength, ValidationOptions } from "class-validator";
import { IsNotEmptyString } from "./is-not-empty-string.decorator";

export function IsUrlName(validationOptions?: ValidationOptions) {
    return applyDecorators(
        MaxLength(50),
        IsNotEmptyString(validationOptions),
        Matches(/^[^\s]+$/, { message: 'urlName cannot contain any whitespace', ...validationOptions })
    )
}