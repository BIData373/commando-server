import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IdMetaFieldsDto } from '../../../../common/dto/response/id-meta-fields.dto';
import { ITask } from '../../../../types';

@Exclude()
export class TaskDto extends IdMetaFieldsDto implements ITask {
  @ExposeProperty()
  title: string;

  @ExposeProperty({ nullable: true })
  description: string | null;

  @ExposeProperty()
  flagged: boolean;

  @ExposeProperty()
  deadlineType: string;

  @ExposeProperty()
  issuedAt: Date;

  @ExposeProperty()
  dueDate: Date;

  @ExposeProperty({ nullable: true })
  notes: object | null;

  @ExposeProperty()
  workspaceId: number;

  @ExposeProperty()
  sourceId: number;
}
