import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IdMetaFieldsDto } from '../../../../common/dto/response/id-meta-fields.dto';
import { IMessage } from '../../../../types';

@Exclude()
export class MessageDto extends IdMetaFieldsDto implements IMessage {
  @ExposeProperty()
  content: string;

  @ExposeProperty()
  assigneeId: number;

  @ExposeProperty()
  taskId: number;
}
