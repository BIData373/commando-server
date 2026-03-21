import { IntersectionType } from '@nestjs/mapped-types';
import { Exclude, Expose } from 'class-transformer';
import { IdDto } from '../../../../common/dto/response/id.dto';
import { MetaFieldsDto } from '../../../../common/dto/response/meta-fields.dto';

@Exclude()
export class TaskDto extends IntersectionType(
  IdDto,
  MetaFieldsDto
) {
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
