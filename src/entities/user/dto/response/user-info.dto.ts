import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';

@Exclude()
export class UserInfoDto {
  @ExposeProperty()
  upn: string;

  @ExposeProperty({ type: String, nullable: true })
  displayName: string | null;

  @ExposeProperty({ type: String, nullable: true })
  name: string | null;

  @ExposeProperty({ type: Boolean, nullable: true })
  isBI?: boolean;
}
