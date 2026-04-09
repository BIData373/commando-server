import { Exclude, Expose } from 'class-transformer';
import { IdMetaFieldsDto } from '../../../../common/dto/response/id-meta-fields.dto';
import { IPikud } from '../../../../types';

@Exclude()
export class PikudDto extends IdMetaFieldsDto implements IPikud {
  @Expose()
  name: string;

  @Expose()
  icon: string | null;
}
