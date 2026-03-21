import { IntersectionType } from '@nestjs/mapped-types';
import { Exclude, Expose } from 'class-transformer';
import { IdDto } from '../../../../common/dto/response/id.dto';
import { MetaFieldsDto } from '../../../../common/dto/response/meta-fields.dto';
import { NameDto } from '../../../../common/dto/response/name.dto';

@Exclude()
export class AssigneeDto extends IntersectionType(
  IdDto,
  NameDto,
  MetaFieldsDto
) {
  @Expose()
  color: string;
}
