import { ApiProperty } from '@nestjs/swagger';

export function ErrorDtoMixin<T extends Record<string, string>>(enumType: T | T[keyof T][]) {
  const values = Array.isArray(enumType) ? enumType : Object.values(enumType);

  class CustomErrorDto {
    @ApiProperty({
      type: Number,
      example: 400,
    })
    statusCode: number;

    @ApiProperty({
      enum: enumType,
      example: values[0],
      description: 'Specific error code key',
    })
    message: T[keyof T];

    @ApiProperty({
      type: String,
      example: 'Bad Request',
      required: false,
    })
    error?: string;
  }

  return CustomErrorDto;
}
