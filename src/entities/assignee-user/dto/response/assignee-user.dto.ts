import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IAssigneeUser } from '../../../../types';

@Exclude()
export class AssigneeUserDto implements IAssigneeUser {
  @ExposeProperty()
  assigneeId: number;

  @ExposeProperty()
  userId: number;
}
