import { IsInt } from 'class-validator';
import { ICreateAssigneeTaskStatus } from '../../../../types';

export class CreateAssigneeTaskStatusDto implements ICreateAssigneeTaskStatus {
  @IsInt()
  taskId: number;

  @IsInt()
  assigneeId: number;

  @IsInt()
  statusId: number;
}
