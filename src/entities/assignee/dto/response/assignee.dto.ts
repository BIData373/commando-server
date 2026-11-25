import { Exclude, Type } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IdMetaFieldsDto } from '../../../../common/dto/response/id-meta-fields.dto';
import { AssigneeUserDto } from './assignee-user.dto';

@Exclude()
export class AssigneeDto extends IdMetaFieldsDto {
  @ExposeProperty()
  name: string;

  @ExposeProperty()
  color: string;

  @ExposeProperty({ type: String, nullable: true })
  icon: string | null;

  @ExposeProperty({ type: String, nullable: true })  
  iconName: string | null;

  @ExposeProperty()
  workspaceId: number;

  @ExposeProperty()
  statusEditable: boolean;

  @ExposeProperty({ type: [AssigneeUserDto] })
  @Type(() => AssigneeUserDto)
  users: AssigneeUserDto[];
}
