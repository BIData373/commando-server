import { Exclude, Expose } from 'class-transformer';
import { IdMetaFieldsDto } from '../../../../common/dto/response/id-meta-fields.dto';

@Exclude()
export class PikudDto extends IdMetaFieldsDto {
  @Expose()
  name: string;

  @Expose()
  icon?: string | null;
}
