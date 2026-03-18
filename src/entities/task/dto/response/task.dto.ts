import { Exclude, Expose } from 'class-transformer';
import { MetaFieldsDto } from '../../../../shared/dto/response/meta-fields.dto';

@Exclude()
export class TaskDto extends MetaFieldsDto {
  @Expose()
  id: number;

  @Expose()
  title: string;

  @Expose()
  description?: string | null;

  @Expose()
  flagged: boolean;

  @Expose()
  deadlineType: string;

  @Expose()
  issuedAt: Date;

  @Expose()
  dueDate: Date;

  @Expose()
  notes?: object | null;

  @Expose()
  workspaceId: number;

  @Expose()
  sourceId: number;
}
