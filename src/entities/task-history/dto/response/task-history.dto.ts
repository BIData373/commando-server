import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IdDto } from '../../../../common/dto/response/id.dto';
import { ITaskHistory, HistoryAction } from '../../../../types';

@Exclude()
export class TaskHistoryDto extends IdDto implements ITaskHistory {
  @ExposeProperty({ enum: HistoryAction })
  action: HistoryAction;

  @ExposeProperty()
  field: string;

  @ExposeProperty({ nullable: true })
  value: string | null;

  @ExposeProperty()
  timestamp: Date;

  @ExposeProperty()
  taskId: number;

  @ExposeProperty()
  workspaceId: number;

  @ExposeProperty()
  userId: number;
}
