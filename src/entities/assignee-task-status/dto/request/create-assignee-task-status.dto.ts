import { IsInt } from 'class-validator';

export class CreateAssigneeTaskStatusDto {
  @IsInt()
  taskId: number;

  @IsInt()
  assigneeId: number;

  @IsInt()
  statusId: number;
}
