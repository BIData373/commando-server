import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IdMetaFieldsDto } from '../../../../common/dto/response/id-meta-fields.dto';
import { IAssignee } from '../../../../types';

@Exclude()
export class AssigneeDto extends IdMetaFieldsDto implements IAssignee {
  @ExposeProperty()
  name: string;

  @ExposeProperty()
  color: string;

  @ExposeProperty({ nullable: true })
  icon: string | null;

  @ExposeProperty()
  workspaceId: number;
}
