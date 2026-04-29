import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsObject, IsOptional, IsString } from 'class-validator';
import { IdExists } from '../../../../common/decorators/id-exists.decorator';
import { ICreateTask } from '../../../../types';
import { GetManagerWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';

// FIX Remove workspaceId
export class CreateTaskDto extends GetManagerWorkspaceIdFieldDto implements ICreateTask {
  // FIX Permission
  @IdExists('source')
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
