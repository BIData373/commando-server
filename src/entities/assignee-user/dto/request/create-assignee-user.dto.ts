import { IsInt } from 'class-validator';
import { ICreateAssigneeUser } from '../../../../types';

export class CreateAssigneeUserDto implements ICreateAssigneeUser {
  @IsInt()
  assigneeId: number;

  @IsInt()
  userId: number;
}
