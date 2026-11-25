import { Exclude, Type } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { UserDto } from '../../../user/dto/response/user.dto';

@Exclude()
export class AssigneeUserDto {
  @ExposeProperty()
  statusEditable: boolean;

  @ExposeProperty({ type: UserDto })
  @Type(() => UserDto)
  user: UserDto;
}
