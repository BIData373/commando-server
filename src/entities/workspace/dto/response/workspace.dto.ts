import { Exclude, Expose } from 'class-transformer';
import { IdMetaFieldsDto } from '../../../../common/dto/response/id-meta-fields.dto';

@Exclude()
export class WorkspaceDto extends IdMetaFieldsDto {
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
