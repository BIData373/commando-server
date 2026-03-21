import { IntersectionType } from '@nestjs/mapped-types';
import { Exclude, Expose } from 'class-transformer';
import { IdDto } from '../../../../common/dto/response/id.dto';
import { MetaFieldsDto } from '../../../../common/dto/response/meta-fields.dto';

@Exclude()
export class WorkspaceDto extends IntersectionType(
  IdDto,
  MetaFieldsDto
) {
  @Expose()
  title: string;

  @Expose()
  urlName: string;

  @Expose()
  icon?: string | null;

  @Expose()
  assigneeStatusEditable: boolean;

  @Expose()
  pikudId: number;
}
