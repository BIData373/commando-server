import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsDateString, IsEnum, IsOptional } from 'class-validator';
import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';
import { IsPositiveInt } from '../../../../common/decorators/is-positive-int.decorator';
import { DeadlineType } from '../../../../types/prisma';

export class GetAIExtractedTaskDto {
  @ApiProperty()
  @IsNotEmptyString()
  title: string;

  @ApiPropertyOptional({ enumName: 'DeadlineType', enum: DeadlineType, nullable: true })
  @IsOptional()
  @IsEnum(DeadlineType)
  deadlineType?: DeadlineType | null;

  @ApiPropertyOptional({ type: String, nullable: true })
  @IsOptional()
  @IsDateString()
  deadlineDate?: string | null;

  @ApiProperty({ type: [Number] })
  @IsArray()
  @IsPositiveInt({ each: true })
  @Type(() => Number)
  assigneeIds: number[];
}
