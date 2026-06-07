import { Exclude, Transform } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { AssigneesPayload } from '../../types/assignees-payload.type';
import { AssigneeDto } from './assignee.dto';

@Exclude()
export class AssigneesDto extends AssigneeDto {
  @ExposeProperty()
  @Transform(({ obj }: { obj: AssigneesPayload }) => obj._count.taskStatuses)
  tasksCount: number
}
