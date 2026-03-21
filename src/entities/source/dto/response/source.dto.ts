import { IntersectionType } from '@nestjs/mapped-types';
import { Exclude } from 'class-transformer';
import { IdDto } from '../../../../common/dto/response/id.dto';
import { MetaFieldsDto } from '../../../../common/dto/response/meta-fields.dto';
import { NameDto } from '../../../../common/dto/response/name.dto';

@Exclude()
export class SourceDto extends IntersectionType(
  IdDto,
  NameDto,
  MetaFieldsDto
) { }