import { Exclude, Expose } from 'class-transformer';
import { IdMetaFieldsDto } from '../../../../common/dto/response/id-meta-fields.dto';
import { IAssignee } from '../../../../types';

@Exclude()
export class AssigneeDto extends IdMetaFieldsDto implements IAssignee {
  @Expose()
  name: string;

  @Expose()
  color: string;

  @Expose()
  icon: string;

  @Expose()
  workspaceId: number;
}
