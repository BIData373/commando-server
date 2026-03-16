import { IsInt } from 'class-validator';

export class DeleteAssigneeUserDto {
  @IsInt()
  assigneeId: number;

  @IsInt()
  userId: number;
}
