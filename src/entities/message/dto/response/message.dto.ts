import { Exclude, Type } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IdMetaFieldsDto } from '../../../../common/dto/response/id-meta-fields.dto';
import { UserDto } from '../../../user/dto/response/user.dto';

@Exclude()
export class MessageDto extends IdMetaFieldsDto {
  @ExposeProperty()
  content: string;

  @ExposeProperty({ type: UserDto })
  @Type(() => UserDto)
  user: UserDto;

  @ExposeProperty()
  taskId: number;
}
