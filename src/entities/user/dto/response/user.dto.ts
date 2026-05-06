import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IdDto } from '../../../../common/dto/response/id.dto';
import { IUser } from '../../../../types';
import { UserInfoDto } from './user-info.dto';

@Exclude()
export class UserDto extends IdDto implements IUser {
  @ExposeProperty()
  upn: string;

  @ExposeProperty({ nullable: true, type: () => UserInfoDto })
  info: UserInfoDto | null;
}
