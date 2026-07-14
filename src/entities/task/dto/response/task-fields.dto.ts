import { Exclude, Type } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IdMetaFieldsDto } from '../../../../common/dto/response/id-meta-fields.dto';
import { DeadlineType, TaskCreationType } from '../../../../types/prisma';
import { SourceDto } from '../../../source/dto/response/source.dto';
import { TagDto } from '../../../tag/dto/response/tag.dto';

@Exclude()
export class TaskFieldsDto extends IdMetaFieldsDto {
  @ExposeProperty()
  title: string;

  @ExposeProperty({ type: String, nullable: true })
  description: string | null;

  @ExposeProperty()
  flagged: boolean;

  @ExposeProperty({ enumName: 'DeadlineType', enum: DeadlineType })
  deadlineType: DeadlineType;

  @ExposeProperty({ enumName: 'TaskCreationType', enum: TaskCreationType })
  creationType: TaskCreationType;

  @ExposeProperty({ type: Date, nullable: true })
  dueDate: Date | null;

  @ExposeProperty({ type: String, nullable: true })
  notes: string | null;

  @ExposeProperty()
  workspaceId: number;

  @ExposeProperty({ type: SourceDto, nullable: true })
  @Type(() => SourceDto)
  source: SourceDto | null;

  @ExposeProperty({ type: [TagDto] })
  @Type(() => TagDto)
  tags: TagDto[];
}
