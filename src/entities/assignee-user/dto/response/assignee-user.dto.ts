import { Exclude, Expose } from 'class-transformer';
import { IAssigneeUser } from '../../../../types';

@Exclude()
export class AssigneeUserDto implements IAssigneeUser {
  @Expose()
  assigneeId: number;

  @Expose()
  userId: number;
}
