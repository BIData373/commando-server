import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { PartialMetaFieldsDto } from '../../../../common/dto/response/partial-meta-fields.dto';
import { ITag } from '../../../../types';

@Exclude()
export class TagDto extends PartialMetaFieldsDto implements ITag {
  @ExposeProperty()
  id: number;

  @ExposeProperty()
  name: string;

  @ExposeProperty()
  workspaceId: number;
}
