import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { PartialMetaFieldsDto } from '../../../../common/dto/response/partial-meta-fields.dto';

@Exclude()
export class TagDto extends PartialMetaFieldsDto {
  @ExposeProperty()
  id: number;

  @ExposeProperty()
  name: string;

  @ExposeProperty()
  workspaceId: number;
}
