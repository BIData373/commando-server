import { IsInt } from 'class-validator';

export class CreateAssigneeUserDto {
  @IsInt()
  assigneeId: number;

  @IsInt()
  userId: number;
}
