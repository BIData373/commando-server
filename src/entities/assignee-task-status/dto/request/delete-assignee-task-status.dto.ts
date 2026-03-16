import { IsInt } from 'class-validator';

export class DeleteAssigneeTaskStatusDto {
  @IsInt()
  taskId: number;

  @IsInt()
  assigneeId: number;
}
