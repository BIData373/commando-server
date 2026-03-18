import { Exclude, Expose } from 'class-transformer';
import { MetaFieldsDto } from '../../../../shared/dto/response/meta-fields.dto';

@Exclude()
export class PikudDto extends MetaFieldsDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  icon?: string | null;
}
