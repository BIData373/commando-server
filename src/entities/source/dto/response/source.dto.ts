import { Exclude, Expose } from 'class-transformer';
import { MetaFieldsDto } from '../../../../shared/dto/meta-fields.dto';

@Exclude()
export class SourceDto extends MetaFieldsDto {
  @Expose()
  id: number;

  @Expose()
  name: string;
}
