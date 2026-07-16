import { ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';
import { TransformToBoolean } from '../../../../common/decorators/transform-to-boolean.decorator';
import { CreateSourceDto } from './create-source.dto';

export class UpdateSourceDto extends PartialType(CreateSourceDto) {
  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  @TransformToBoolean()
  deleteAttachment?: boolean;
}
