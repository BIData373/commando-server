import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { ICreateTaskHistory, HistoryAction } from '../../../../types';

export class CreateTaskHistoryDto implements ICreateTaskHistory {
  @IsEnum(HistoryAction)
  action: HistoryAction;

  @IsString()
  field: string;

  @IsString()
  @IsOptional()
  value?: string;

  @IsInt()
  taskId: number;

  @IsInt()
  workspaceId: number;

  @IsInt()
  userId: number;
}
