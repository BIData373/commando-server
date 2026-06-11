import { Exclude, Type } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { UserInfoDto } from './user-info.dto';

@Exclude()
export class MirageUserDto {
  @ExposeProperty()
  upn: string;

  @ExposeProperty({ nullable: true, type: UserInfoDto })
  @Type(() => UserInfoDto)
  info: UserInfoDto | null;
}
