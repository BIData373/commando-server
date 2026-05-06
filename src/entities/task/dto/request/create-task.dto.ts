import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsObject, IsOptional, IsString } from 'class-validator';
import { IdExists } from '../../../../common/decorators/id-exists.decorator';
import { ICreateTask } from '../../../../types';
import { GetManagerWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';

// FIX Remove workspaceId
export class CreateTaskDto extends GetManagerWorkspaceIdFieldDto implements ICreateTask {
  // FIX Permission
  @ApiProperty()
  @IdExists('source')
  sourceId: number;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  flagged?: boolean;

  @ApiProperty()
  @IsString()
  deadlineType: string;

  @ApiProperty({ required: false })
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  issuedAt?: Date;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  dueDate: Date;

  @ApiProperty({ required: false })
  @IsObject()
  @IsOptional()
  notes?: object;
}
