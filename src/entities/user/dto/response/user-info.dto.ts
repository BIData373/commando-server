import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IdDto } from '../../../../common/dto/response/id.dto';

@Exclude()
export class UserInfoDto extends IdDto {
  @ExposeProperty()
  upn: string;

  @ExposeProperty()
  name: string;

  @ExposeProperty()
  displayName: string;

  @ExposeProperty()
  isBI: boolean;
}
