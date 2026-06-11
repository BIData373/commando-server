import { Exclude, Expose } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { ApiPropertyOptional } from '@nestjs/swagger';

@Exclude()
export class UserInfoDto {
  @ExposeProperty()
  upn: string;

  @ApiPropertyOptional({ type: String, nullable: true })
  @Expose()
  displayName?: string;

  @ApiPropertyOptional({ type: String, nullable: true })
  @Expose()
  name?: string;

  @ApiPropertyOptional({ type: Boolean, nullable: true })
  @Expose()
  isBI?: boolean;
}
