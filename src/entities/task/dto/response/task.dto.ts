import { Exclude, Expose } from 'class-transformer';
import { IdMetaFieldsDto } from '../../../../common/dto/response/id-meta-fields.dto';
import { ITask } from '../../../../types';

@Exclude()
export class TaskDto extends IdMetaFieldsDto implements ITask {
  @Expose()
  title: string;

  @Expose()
  description: string | null;

  @Expose()
  flagged: boolean;

  @Expose()
  deadlineType: string;

  @Expose()
  issuedAt: Date;

  @Expose()
  dueDate: Date;

  @Expose()
  notes: object | null;

  @Expose()
  workspaceId: number;

  @Expose()
  sourceId: number;
}
