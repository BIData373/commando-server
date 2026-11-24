import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';
import { TransformToBoolean } from '../../../../common/decorators/transform-to-boolean.decorator';
import { GetSourceFieldsDto } from './get-source-fields.dto';

export class CreateSourceDto extends GetSourceFieldsDto {
  @ApiProperty({ type: 'string', format: 'binary', required: false, nullable: true })
  @IsOptional()
  attachment?: Express.Multer.File;

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  @TransformToBoolean()
  attachmentVisibleToAssignees?: boolean;

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  @TransformToBoolean()
  aiExtraction?: boolean;
}
