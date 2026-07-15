import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsOptional, ValidateIf, ValidateNested } from 'class-validator';
import { TransformToBoolean } from '../../../../common/decorators/transform-to-boolean.decorator';
import { ExtractionErrorReason } from '../../enums/source-extraction-error-reason.enum';
import { GetAIExtractedTaskDto } from './get-ai-extracted-task.dto';

export class GetAIExtractionCallbackDto {
  @ApiProperty()
  @IsBoolean()
  @TransformToBoolean()
  success: boolean;

  @ApiPropertyOptional({ enumName: 'ExtractionErrorReason', enum: ExtractionErrorReason })
  @ValidateIf(o => o.success === false)
  @IsEnum(ExtractionErrorReason)
  @IsOptional()
  reason?: ExtractionErrorReason;

  @ApiPropertyOptional({ type: [GetAIExtractedTaskDto] })
  @ValidateIf(o => o.success === true)
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GetAIExtractedTaskDto)
  @IsOptional()
  tasks?: GetAIExtractedTaskDto[];
}
