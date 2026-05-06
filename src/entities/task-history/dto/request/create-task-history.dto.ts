import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { ICreateTaskHistory, HistoryAction } from '../../../../types';

export class CreateTaskHistoryDto implements ICreateTaskHistory {
  @ApiProperty({ enum: HistoryAction })
  @IsEnum(HistoryAction)
  action: HistoryAction;

  @ApiProperty()
  @IsString()
  field: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  value?: string;

  @ApiProperty()
  @IsInt()
  taskId: number;

  @ApiProperty()
  @IsInt()
  workspaceId: number;

  @ApiProperty()
  @IsInt()
  userId: number;
}
