import { Exclude, Expose } from 'class-transformer';
import { MetaFieldsDto } from '../../../../shared/dto/meta-fields.dto';

@Exclude()
export class WorkspaceDto extends MetaFieldsDto {
  @Expose()
  id: number;

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
