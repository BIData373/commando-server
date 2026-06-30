import { Exclude, Type } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { AssigneeStatusDto } from './assignee-status.dto';
import { TaskFieldsDto } from './task-fields.dto';

@Exclude()
export class TaskDto extends TaskFieldsDto {
  @ExposeProperty({ type: [AssigneeStatusDto] })
  @Type(() => AssigneeStatusDto)
  assigneeStatuses: AssigneeStatusDto[];
}
