import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { PartialMetaFieldsDto } from '../../../../common/dto/response/partial-meta-fields.dto';
import { ExtractionStatus } from '../../../../types/prisma';

@Exclude()
export class SourceAttachmentDto extends PartialMetaFieldsDto {
  @ExposeProperty()
  id: number;

  @ExposeProperty()
  name: string;

  @ExposeProperty({ enumName: 'ExtractionStatus', enum: ExtractionStatus, nullable: true })
  extractionStatus: ExtractionStatus | null;

  @ExposeProperty()
  visibleToAssignees: boolean;

  @ExposeProperty()
  sourceId: number;
}
