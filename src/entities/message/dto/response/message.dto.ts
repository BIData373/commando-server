import { Exclude, Expose } from 'class-transformer';
import { MetaFieldsDto } from '../../../../shared/dto/meta-fields.dto';

@Exclude()
export class MessageDto extends MetaFieldsDto {
  @Expose()
  id: number;

  @Expose()
  content: string;

  @Expose()
  assigneeId: number;

  @Expose()
  taskId: number;
}
