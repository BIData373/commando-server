import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';

@Exclude()
export class AssigneeUserDto {
  @ExposeProperty()
  assigneeId: number;

  @ExposeProperty()
  userId: number;
}
