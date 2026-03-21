import { IntersectionType } from '@nestjs/mapped-types';
import { Exclude, Expose } from 'class-transformer';
import { IdDto } from '../../../../common/dto/response/id.dto';
import { MetaFieldsDto } from '../../../../common/dto/response/meta-fields.dto';

@Exclude()
export class MessageDto extends IntersectionType(
  IdDto,
  MetaFieldsDto
) {
  @Expose()
  content: string;

  @Expose()
  assigneeId: number;

  @Expose()
  taskId: number;
}
