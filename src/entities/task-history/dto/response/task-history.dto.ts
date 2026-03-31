import { Exclude, Expose } from 'class-transformer';
import { IdDto } from '../../../../common/dto/response/id.dto';
import { ITaskHistory, HistoryAction } from '../../../../types';

@Exclude()
export class TaskHistoryDto extends IdDto implements ITaskHistory {
  @Expose()
  action: HistoryAction;

  @Expose()
  field: string;

  @Expose()
  value: string | null;

  @Expose()
  timestamp: Date;

  @Expose()
  taskId: number;

  @Expose()
  workspaceId: number;

  @Expose()
  userId: number;
}
