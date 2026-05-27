import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IdDto } from '../../../../common/dto/response/id.dto';
import { HistoryAction } from '../../../../types/prisma';

@Exclude()
export class TaskHistoryDto extends IdDto {
  @ExposeProperty({ enum: HistoryAction })
  action: HistoryAction;

  @ExposeProperty()
  field: string;

  @ExposeProperty({ type: String, nullable: true })
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
