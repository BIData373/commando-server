import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class GetContentDto {
  @ApiProperty()
  @IsString()
  content: string;
}
