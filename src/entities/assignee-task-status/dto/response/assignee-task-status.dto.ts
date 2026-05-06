import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IAssigneeTaskStatus } from '../../../../types';

@Exclude()
export class AssigneeTaskStatusDto implements IAssigneeTaskStatus {
  @ExposeProperty()
  taskId: number;

  @ExposeProperty()
  assigneeId: number;

  @ExposeProperty()
  statusId: number;
}
