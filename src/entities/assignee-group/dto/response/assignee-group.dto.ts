import { Exclude, Type } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IdMetaFieldsDto } from '../../../../common/dto/response/id-meta-fields.dto';
import { AssigneeDto } from '../../../assignee/dto/response/assignee.dto';

@Exclude()
export class AssigneeGroupDto extends IdMetaFieldsDto {
  @ExposeProperty()
  name: string;

  @ExposeProperty()
  workspaceId: number;

  @ExposeProperty({ type: [AssigneeDto] })
  @Type(() => AssigneeDto)
  assignees: AssigneeDto[];
}
