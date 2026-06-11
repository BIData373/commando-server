import { Exclude, Expose } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { ApiPropertyOptional } from '@nestjs/swagger';

@Exclude()
export class UserInfoDto {
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
