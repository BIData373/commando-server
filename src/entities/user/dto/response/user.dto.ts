import { Exclude, Expose } from 'class-transformer';
import { IdDto } from '../../../../common/dto/response/id.dto';

@Exclude()
export class UserDto extends IdDto {
  @Expose()
  upn: string;

  @Expose()
  info?: object | null;
}
