import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IdMetaFieldsDto } from '../../../../common/dto/response/id-meta-fields.dto';

@Exclude()
export class WorkspaceDto extends IdMetaFieldsDto {
  @ExposeProperty()
  title: string;

  @ExposeProperty()
  urlName: string;

  @ExposeProperty({ type: String, nullable: true })
  icon: string | null;

  @ExposeProperty()
  assigneeStatusEditable: boolean;

  @ExposeProperty()
  pikudId: number;
}
