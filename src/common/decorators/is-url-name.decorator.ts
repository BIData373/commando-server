import { applyDecorators } from "@nestjs/common";
import { Matches, MaxLength, ValidationOptions } from "class-validator";
import { WORKSPACE_URLNAME_MAX_LENGTH } from "../../entities/workspace/consts/workspace-max-length";
import { IsNotEmptyString } from "./is-not-empty-string.decorator";

export function IsUrlName(validationOptions?: ValidationOptions) {
    return applyDecorators(
        MaxLength(WORKSPACE_URLNAME_MAX_LENGTH, validationOptions),
        IsNotEmptyString(validationOptions),
        Matches(/^[^\s]+$/, { message: 'urlName cannot contain any whitespace', ...validationOptions })
    )
}