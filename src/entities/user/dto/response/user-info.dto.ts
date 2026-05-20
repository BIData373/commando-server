import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IdDto } from '../../../../common/dto/response/id.dto';
import { IUserInfo } from '../../../../types';

@Exclude()
export class UserInfoDto extends IdDto implements IUserInfo {
  @ExposeProperty()
  upn: string;

  @ExposeProperty()
  name: string;

  @ExposeProperty()
  displayName: string;

  @ExposeProperty()
  isBI: boolean;
}
