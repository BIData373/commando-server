import { Exclude, Expose } from 'class-transformer';
import { HistoryAction } from '../../../../../prisma/generated';

@Exclude()
export class TaskHistoryDto {
  @Expose()
  id: number;

  @Expose()
  action: HistoryAction;

  @Expose()
  field: string;

  @Expose()
  value?: string | null;

  @Expose()
  timestamp: Date;

  @Expose()
  taskId: number;

  @Expose()
  workspaceId: number;

  @Expose()
  userId: number;
}
