import { ApiProperty } from '@nestjs/swagger';

export class ErrorDto {
  @ApiProperty({ type: Number, example: 400 })
  statusCode: number;

  @ApiProperty({ type: String })
  message: string;

  @ApiProperty({ type: String, required: false, example: 'Bad Request' })
  error?: string;
}
