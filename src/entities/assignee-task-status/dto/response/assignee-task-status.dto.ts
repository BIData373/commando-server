import { Exclude, Expose } from 'class-transformer';
import { IAssigneeTaskStatus } from '../../../../types';

@Exclude()
export class AssigneeTaskStatusDto implements IAssigneeTaskStatus {
  @Expose()
  taskId: number;

  @Expose()
  assigneeId: number;

  @Expose()
  statusId: number;
}
