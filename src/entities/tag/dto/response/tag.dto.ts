import { Exclude, Expose } from 'class-transformer';
import { PartialMetaFieldsDto } from '../../../../common/dto/response/partial-meta-fields.dto';
import { ITag } from '../../../../types';

@Exclude()
export class TagDto extends PartialMetaFieldsDto implements ITag {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  workspaceId: number;
}
