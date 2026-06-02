import { Exclude, Type } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IdMetaFieldsDto } from '../../../../common/dto/response/id-meta-fields.dto';
import { SourceDto } from '../../../source/dto/response/source.dto';
import { TagDto } from '../../../tag/dto/response/tag.dto';
import { AssigneeStatusDto } from './assignee-status.dto';
import { DeadlineType } from '../../../../types/prisma';

@Exclude()
export class TaskDto extends IdMetaFieldsDto {
  @ExposeProperty()
  title: string;

  @ExposeProperty({ type: String, nullable: true })
  description: string | null;

  @ExposeProperty()
  flagged: boolean;

  @ExposeProperty({ enumName: 'DeadlineType', enum: DeadlineType })
  deadlineType: DeadlineType;

  @ExposeProperty()
  issuedAt: Date;

  @ExposeProperty()
  dueDate: Date;

  @ExposeProperty({ type: String, nullable: true })
  notes: string | null;

  @ExposeProperty()
  workspaceId: number;

  @ExposeProperty()
  @Type(() => SourceDto)
  source: SourceDto;

  @ExposeProperty({ type: [TagDto] })
  @Type(() => TagDto)
  tags: TagDto[];

  @ExposeProperty({ type: [AssigneeStatusDto] })
  @Type(() => AssigneeStatusDto)
  assigneeStatuses: AssigneeStatusDto[];
}
