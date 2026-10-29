import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { UserDto } from './user.dto';

@Exclude()
export class CurrentUserDto extends UserDto {
  @ExposeProperty({ type: Date, nullable: true })
  personalAreaEnteredAt: Date | null;

  @ExposeProperty()
  hasOnboarded: boolean;
}
