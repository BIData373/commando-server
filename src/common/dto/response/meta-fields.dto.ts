import { Exclude, Type } from 'class-transformer';
import { UserDto } from '../../../entities/user/dto/response/user.dto';
import { ExposeProperty } from '../../decorators/expose-property.decorator';
import { PartialMetaFieldsDto } from './partial-meta-fields.dto';

@Exclude()
export class MetaFieldsDto extends PartialMetaFieldsDto {
  @ExposeProperty({ type: Date, nullable: true })
  deletedAt: Date | null;

  @ExposeProperty({ type: UserDto, nullable: true })
  @Type(() => UserDto)
  deletedBy: UserDto | null;
}
