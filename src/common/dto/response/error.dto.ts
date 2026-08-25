import { ApiProperty } from '@nestjs/swagger';

export function CreateErrorDto<T extends readonly string[]>(messages: T) {
  class CustomErrorDto {
    @ApiProperty({
      type: Number,
      example: 400,
    })
    statusCode: number;

    @ApiProperty({
      anyOf: [
        { type: 'string', enum: messages as unknown as string[] },
        { type: 'string' },
      ],
      example: messages[0] || 'An error occurred',
      description: 'Specific error code key or fallback string message',
    })
    message: T[number] | (string & {});

    @ApiProperty({
      type: String,
      example: 'Bad Request',
      required: false,
    })
    error?: string;
  }

  return CustomErrorDto;
}
