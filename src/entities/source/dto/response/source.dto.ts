import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IdMetaFieldsDto } from '../../../../common/dto/response/id-meta-fields.dto';

@Exclude()
export class SourceDto extends IdMetaFieldsDto {
  @ExposeProperty()
  name: string;

  @ExposeProperty()
  workspaceId: number;
}
