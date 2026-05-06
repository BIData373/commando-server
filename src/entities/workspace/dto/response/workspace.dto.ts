import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IdMetaFieldsDto } from '../../../../common/dto/response/id-meta-fields.dto';
import { IWorkspace } from '../../../../types';

@Exclude()
export class WorkspaceDto extends IdMetaFieldsDto implements IWorkspace {
  @ExposeProperty()
  title: string;

  @ExposeProperty()
  urlName: string;

  @ExposeProperty({ nullable: true })
  icon: string | null;

  @ExposeProperty()
  assigneeStatusEditable: boolean;

  @ExposeProperty()
  pikudId: number;
}
