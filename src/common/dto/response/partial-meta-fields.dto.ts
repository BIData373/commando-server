import { Exclude, Type } from 'class-transformer';
import { ExposeProperty } from '../../decorators/expose-property.decorator';
import { UserDto } from '../../../entities/user/dto/response/user.dto';

@Exclude()
export class PartialMetaFieldsDto {
  @ExposeProperty()
  createdAt: Date;

  @ExposeProperty({ type: UserDto })
  @Type(() => UserDto)
  createdBy: UserDto;

  @ExposeProperty()
  updatedAt: Date;

  @ExposeProperty({ type: UserDto })
  @Type(() => UserDto)
  updatedBy: UserDto;
}
