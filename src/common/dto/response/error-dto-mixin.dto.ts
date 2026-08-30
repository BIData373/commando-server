import { ApiProperty } from '@nestjs/swagger';

export function ErrorDtoMixin<T extends readonly string[]>(messages: T) {
  class CustomErrorDto {
    @ApiProperty({
      type: Number,
      example: 400,
    })
    statusCode: number;

    @ApiProperty({
      enum: messages as unknown as string[],
      example: messages[0],
      description: 'Specific error code key',
    })
    message: T[number];

    @ApiProperty({
      type: String,
      example: 'Bad Request',
      required: false,
    })
    error?: string;
  }

  return CustomErrorDto;
}
