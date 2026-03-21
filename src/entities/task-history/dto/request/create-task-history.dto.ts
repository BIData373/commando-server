import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { HistoryAction } from '../../../../../prisma';

export class CreateTaskHistoryDto {
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
