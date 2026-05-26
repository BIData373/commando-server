import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../decorators/expose-property.decorator';
import { PartialMetaFieldsDto } from './partial-meta-fields.dto';

@Exclude()
export class MetaFieldsDto extends PartialMetaFieldsDto {
  @ExposeProperty({ nullable: true })
  deletedAt: Date | null;

  @ExposeProperty({ nullable: true })
  deletedBy: number | null;
}
