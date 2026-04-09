import { IsInt } from 'class-validator';
import { IUpdateAssigneeTaskStatus } from '../../../../types';

export class UpdateAssigneeTaskStatusDto implements IUpdateAssigneeTaskStatus {
  @IsInt()
  statusId: number;
}
