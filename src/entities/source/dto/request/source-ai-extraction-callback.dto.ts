import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsOptional, ValidateIf, ValidateNested } from 'class-validator';
import { TransformToBoolean } from '../../../../common/decorators/transform-to-boolean.decorator';
import { ExtractionErrorReason } from '../../types/source-extraction-error-reason.enum';
import { AIExtractedTaskDto } from './source-ai-extracted-task.dto';

export class AIExtractionCallbackDto {
  @ApiProperty()
  @IsBoolean()
  @TransformToBoolean()
  success: boolean;

  @ApiPropertyOptional({ enumName: 'ExtractionErrorReason', enum: ExtractionErrorReason })
  @ValidateIf(o => o.success === false)
  @IsEnum(ExtractionErrorReason)
  @IsOptional()
  reason?: ExtractionErrorReason;

  @ApiPropertyOptional({ type: [AIExtractedTaskDto] })
  @ValidateIf(o => o.success === true)
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AIExtractedTaskDto)
  @IsOptional()
  tasks?: AIExtractedTaskDto[];
}
