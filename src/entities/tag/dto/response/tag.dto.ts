import { Exclude, Expose } from 'class-transformer';
import { PartialMetaFieldsDto } from '../../../../shared/dto/partial-meta-fields.dto';

@Exclude()
export class TagDto extends PartialMetaFieldsDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  workspaceId: number;
}
