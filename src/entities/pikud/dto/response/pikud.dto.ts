import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IdMetaFieldsDto } from '../../../../common/dto/response/id-meta-fields.dto';

@Exclude()
export class PikudDto extends IdMetaFieldsDto {
  @ExposeProperty()
  name: string;

  @ExposeProperty({ type: String, nullable: true })
  icon: string | null;
}
