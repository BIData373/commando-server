import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IdMetaFieldsDto } from '../../../../common/dto/response/id-meta-fields.dto';

@Exclude()
export class MessageDto extends IdMetaFieldsDto {
  @ExposeProperty()
  content: string;

  @ExposeProperty()
  assigneeId: number;

  @ExposeProperty()
  taskId: number;
}
