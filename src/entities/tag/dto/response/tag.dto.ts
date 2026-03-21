import { IntersectionType } from '@nestjs/mapped-types';
import { Exclude, Expose } from 'class-transformer';
import { IdDto } from '../../../../common/dto/response/id.dto';
import { NameDto } from '../../../../common/dto/response/name.dto';
import { PartialMetaFieldsDto } from '../../../../common/dto/response/partial-meta-fields.dto';

@Exclude()
export class TagDto extends IntersectionType(
  IdDto,
  NameDto,
  PartialMetaFieldsDto
) {
  @Expose()
  workspaceId: number;
}
