import { Exclude, Expose } from 'class-transformer';
import { PartialMetaFieldsDto } from './partial-meta-fields.dto';

@Exclude()
export class MetaFieldsDto extends PartialMetaFieldsDto {
  @Expose()
  deletedAt?: Date | null;

  @Expose()
  deletedBy?: number | null;
}
