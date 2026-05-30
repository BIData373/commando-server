import { Exclude, Type } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IdMetaFieldsDto } from '../../../../common/dto/response/id-meta-fields.dto';
import { TagDto } from '../../../tag/dto/response/tag.dto';

@Exclude()
export class SourceDto extends IdMetaFieldsDto {
  @ExposeProperty()
  name: string;

  @ExposeProperty()
  date: Date;

  @ExposeProperty()
  workspaceId: number;

  @ExposeProperty({ type: String, nullable: true })
  attachmentKey: string | null;

  @ExposeProperty({ type: [TagDto] })
  @Type(() => TagDto)
  tags: TagDto[];
}
