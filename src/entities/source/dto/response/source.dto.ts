import { Exclude, Type } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IdMetaFieldsDto } from '../../../../common/dto/response/id-meta-fields.dto';
import { ExtractionStatus } from '../../../../types/prisma';
import { TagDto } from '../../../tag/dto/response/tag.dto';

@Exclude()
export class SourceDto extends IdMetaFieldsDto {
  @ExposeProperty()
  name: string;

  @ExposeProperty({ type: Date, nullable: true })
  date: Date | null;

  @ExposeProperty()
  workspaceId: number;

  @ExposeProperty({ type: String, nullable: true })
  attachmentKey: string | null;

  @ExposeProperty({ type: String, nullable: true })
  attachmentName: string | null;

  @ExposeProperty()
  draft: boolean;

  @ExposeProperty({ enumName: 'ExtractionStatus', enum: ExtractionStatus, nullable: true })
  extractionStatus: ExtractionStatus | null;

  @ExposeProperty({ type: [TagDto] })
  @Type(() => TagDto)
  tags: TagDto[];
}
