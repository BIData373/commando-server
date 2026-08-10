import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsDate, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';
import { TransformToBoolean } from '../../../../common/decorators/transform-to-boolean.decorator';
import { DeadlineType } from '../../../../types/prisma';
import { GetTaskAssigneeDto } from '../../../task/dto/request/get-task-assignee.dto';

export class CreateSourceTaskDto {
  @ApiProperty()
  @IsNotEmptyString()
  title: string;

  @ApiProperty({ enumName: 'DeadlineType', enum: DeadlineType })
  @IsEnum(DeadlineType)
  deadlineType: DeadlineType;

  @ApiPropertyOptional({ type: Date, nullable: true })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dueDate?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  @TransformToBoolean()
  flagged?: boolean;

  // context.workspace is populated on each assignee directly by SourceController.create's
  // AddDtosToContext interceptor (to: 'body.tasks.assignees') — see GetTaskAssigneeDto.id
  // for the actual workspace-scoping check.
  @ApiPropertyOptional({ type: [GetTaskAssigneeDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GetTaskAssigneeDto)
  assignees?: GetTaskAssigneeDto[];
}
