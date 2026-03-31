import { IntersectionType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsObject, IsOptional, IsString } from 'class-validator';
import { GetSourceIdFieldDto } from '../../../source/dto/request/get-source-id-field.dto';
import { GetWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';
import { ICreateTask } from '../../../../types';

export class CreateTaskDto extends IntersectionType(
  GetWorkspaceIdFieldDto,
  GetSourceIdFieldDto
) implements ICreateTask {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  flagged?: boolean;

  @IsString()
  deadlineType: string;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  issuedAt?: Date;

  @IsDate()
  @Type(() => Date)
  dueDate: Date;

  @IsObject()
  @IsOptional()
  notes?: object;
}
