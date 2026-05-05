import { Exclude, Expose } from 'class-transformer';
import { PartialMetaFieldsDto } from '../../../../common/dto/response/partial-meta-fields.dto';
import { ITag } from '../../../../types';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';

@Exclude()
export class TagDto extends PartialMetaFieldsDto implements ITag {
  @ExposeProperty()
  id: number;

  @ExposeProperty()
  name: string;

  @ExposeProperty()
  workspaceId: number;
}
