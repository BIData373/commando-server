import { Exclude, Type } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IdMetaFieldsDto } from '../../../../common/dto/response/id-meta-fields.dto';
import { SourceAttachmentDto } from '../../../source-attachment/dto/response/source-attachment.dto';
import { TagDto } from '../../../tag/dto/response/tag.dto';

@Exclude()
export class SourceDto extends IdMetaFieldsDto {
  @ExposeProperty()
  name: string;

  @ExposeProperty({ type: Date, nullable: true })
  date: Date | null;

  @ExposeProperty()
  workspaceId: number;

  @ExposeProperty({ type: [SourceAttachmentDto] })
  @Type(() => SourceAttachmentDto)
  attachments: SourceAttachmentDto[];

  @ExposeProperty()
  draft: boolean;

  @ExposeProperty({ type: [TagDto] })
  @Type(() => TagDto)
  tags: TagDto[];
}
