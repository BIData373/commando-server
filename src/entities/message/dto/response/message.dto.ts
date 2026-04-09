import { Exclude, Expose } from 'class-transformer';
import { IdMetaFieldsDto } from '../../../../common/dto/response/id-meta-fields.dto';
import { IMessage } from '../../../../types';

@Exclude()
export class MessageDto extends IdMetaFieldsDto implements IMessage {
  @Expose()
  content: string;

  @Expose()
  assigneeId: number;

  @Expose()
  taskId: number;
}
