import { IsInt } from 'class-validator';
import { IUpdateAssigneeTaskStatus } from '../../../../types';

export class CreateAssigneeTaskStatusDto implements IUpdateAssigneeTaskStatus {
  @IsInt()
  taskId: number;

  @IsInt()
  assigneeId: number;

  @IsInt()
  statusId: number;
}
