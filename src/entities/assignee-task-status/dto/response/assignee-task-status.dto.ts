import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';

@Exclude()
export class AssigneeTaskStatusDto {
  @ExposeProperty()
  taskId: number;

  @ExposeProperty()
  assigneeId: number;

  @ExposeProperty()
  statusId: number;
}
