import { Exclude, Expose } from 'class-transformer';
import { IdMetaFieldsDto } from '../../../../common/dto/response/id-meta-fields.dto';

@Exclude()
export class MessageDto extends IdMetaFieldsDto {
  @Expose()
  content: string;

  @Expose()
  assigneeId: number;

  @Expose()
  taskId: number;
}
