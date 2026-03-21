import { Exclude, Expose } from 'class-transformer';
import { HistoryAction } from '../../../../../prisma';
import { IdDto } from '../../../../common/dto/response/id.dto';

@Exclude()
export class TaskHistoryDto extends IdDto {
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
