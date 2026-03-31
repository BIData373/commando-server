import { Exclude, Expose } from 'class-transformer';
import { IdDto } from '../../../../common/dto/response/id.dto';
import { IUser } from '../../../../types';

@Exclude()
export class UserDto extends IdDto implements IUser {
  @Expose()
  upn: string;

  @Expose()
  info: object | null;
}
