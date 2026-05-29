import { Exclude, Type } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IdDto } from '../../../../common/dto/response/id.dto';
import { UserInfoDto } from './user-info.dto';

@Exclude()
export class UserDto extends IdDto {
  @ExposeProperty()
  upn: string;

  @ExposeProperty({ nullable: true, type: UserInfoDto })
  @Type(() => UserInfoDto)
  info: UserInfoDto | null;
}
