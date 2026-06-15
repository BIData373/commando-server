import { ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { UserInfo } from '../../types/user-info.type';

@Exclude()
export class UserInfoDto implements UserInfo {
  @ExposeProperty()
  upn: string;

  @ApiPropertyOptional({ type: String })
  @Expose()
  displayName?: string;

  @ApiPropertyOptional({ type: String })
  @Expose()
  name?: string;

  @ApiPropertyOptional({ type: Boolean })
  @Expose()
  isBI?: boolean;
}
