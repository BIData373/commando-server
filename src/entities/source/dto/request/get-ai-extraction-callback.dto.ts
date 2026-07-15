import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsOptional, ValidateIf, ValidateNested } from 'class-validator';
import { ExtractionStatus } from '../../../../types/prisma';
import { GetAIExtractedTaskDto } from './get-ai-extracted-task.dto';

export class GetAIExtractionCallbackDto {
  // TODO - technically this allows all statuses to come through, not just errors
  @ApiPropertyOptional({ enumName: 'ExtractionStatus', enum: ExtractionStatus })
  @IsEnum(ExtractionStatus)
  @IsOptional()
  error?: ExtractionStatus

  @ApiPropertyOptional({ type: [GetAIExtractedTaskDto] })
  @ValidateIf(o => o.error == null)
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GetAIExtractedTaskDto)
  @IsOptional()
  tasks?: GetAIExtractedTaskDto[]
}
