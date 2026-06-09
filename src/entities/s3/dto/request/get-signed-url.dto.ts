import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';

export class GetSignedUrlDto {
  @ApiProperty({ required: true })
  @IsNotEmptyString()
  key: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNotEmptyString()
  filename?: string;
}
