import { Exclude, Expose } from 'class-transformer';
import { IdMetaFieldsDto } from '../../../../common/dto/response/id-meta-fields.dto';
import { IPikud } from '../../../../types';
import { ApiProperty } from '@nestjs/swagger';

@Exclude()
export class PikudDto extends IdMetaFieldsDto implements IPikud {
  @ApiProperty()
  @Expose()
  name: string;

  @ApiProperty()
  @Expose()
  icon: string | null;
}
