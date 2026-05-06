import { applyDecorators } from "@nestjs/common";
import { ApiProperty, ApiPropertyOptions } from "@nestjs/swagger";
import { Expose, ExposeOptions } from "class-transformer";

type ExposePropertyOptions =
    ApiPropertyOptions &
    // Pick<ApiPropertyOptions, "type" | "example" | "format" | "deprecated" | "enum"> &
    ExposeOptions

export function ExposeProperty(options?: ExposePropertyOptions) {
    return applyDecorators(
        ApiProperty(options),
        Expose(options)
    )
}