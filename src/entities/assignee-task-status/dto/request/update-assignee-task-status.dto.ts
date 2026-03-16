import { IsInt } from 'class-validator';

export class UpdateAssigneeTaskStatusDto {
  @IsInt()
  statusId: number;
}
