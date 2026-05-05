import { Exclude, Expose } from 'class-transformer';
import { IdMetaFieldsDto } from '../../../../common/dto/response/id-meta-fields.dto';
import { ISource } from '../../../../types';

@Exclude()
export class SourceDto extends IdMetaFieldsDto implements ISource {
  @Expose()
  name: string

  @Expose()
  workspaceId: number
}