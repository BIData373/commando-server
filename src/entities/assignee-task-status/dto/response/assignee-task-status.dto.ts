import { Exclude, Type } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { AssigneeDto } from '../../../assignee/dto/response/assignee.dto';
import { TaskDto } from '../../../task/dto/response/task.dto';
import { WorkspaceStatusDto } from '../../../workspace-status/dto/response/workspace-status.dto';

@Exclude()
export class AssigneeTaskStatusDto {
  @ExposeProperty({ type: TaskDto })
  @Type(() => TaskDto)
  task: TaskDto;

  @ExposeProperty({ type: AssigneeDto })
  @Type(() => AssigneeDto)
  assignee: AssigneeDto;

  @ExposeProperty({ type: WorkspaceStatusDto })
  @Type(() => WorkspaceStatusDto)
  status: WorkspaceStatusDto;

  @ExposeProperty()
  description: string
}