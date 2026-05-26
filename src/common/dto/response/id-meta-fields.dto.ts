import { ExposeProperty } from '../../decorators/expose-property.decorator';
import { MetaFieldsDto } from './meta-fields.dto';

export class IdMetaFieldsDto extends MetaFieldsDto {
  @ExposeProperty()
  id: number;
}
