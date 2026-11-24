import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsOptional, ValidateIf, ValidateNested } from 'class-validator';
import { ExtractionStatus } from '../../../../types/prisma';
import { GetSourceAttachmentIdFieldDto } from '../../../source-attachment/dto/request/get-source-attachment-id-field.dto';
import { GetAIExtractedTaskDto } from './get-ai-extracted-task.dto';

export const ExtractionStatusErrors = {
  AI_SERVICE_ERROR: ExtractionStatus.AI_SERVICE_ERROR,
  BACKEND_ERROR: ExtractionStatus.BACKEND_ERROR,
} as Partial<Record<keyof typeof ExtractionStatus, ExtractionStatus>>;

export type ExtractionStatusErrorsType = typeof ExtractionStatusErrors[keyof typeof ExtractionStatusErrors];

export class GetAIExtractionCallbackDto extends GetSourceAttachmentIdFieldDto {
  @ApiPropertyOptional({
    enumName: 'ExtractionErrorStatus',
    enum: ExtractionStatusErrors
  })
  @IsEnum(ExtractionStatusErrors)
  @IsOptional()
  error?: ExtractionStatusErrorsType

  @ApiPropertyOptional({ type: [GetAIExtractedTaskDto] })
  @ValidateIf(o => o.error == null)
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GetAIExtractedTaskDto)
  @IsOptional()
  tasks?: GetAIExtractedTaskDto[]
}
