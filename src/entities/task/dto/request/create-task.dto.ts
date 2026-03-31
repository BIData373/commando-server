import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsObject, IsOptional, IsString } from 'class-validator';
import { EntityExists } from '../../../../common/decorators/entity-exists.decorator';
import { IsPositiveInt } from '../../../../common/decorators/is-positive-int.decorator';
import { ICreateTask } from '../../../../types';
import { GetWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';

export class CreateTaskDto extends GetWorkspaceIdFieldDto implements ICreateTask {
  @Type(() => Number)
  @EntityExists('source')
  @IsPositiveInt()
  sourceId: number

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
