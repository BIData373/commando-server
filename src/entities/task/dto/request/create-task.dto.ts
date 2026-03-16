import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsInt, IsObject, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
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

  @IsInt()
  workspaceId: number;

  @IsInt()
  sourceId: number;

  @IsInt()
  createdBy: number;

  @IsInt()
  updatedBy: number;
}
