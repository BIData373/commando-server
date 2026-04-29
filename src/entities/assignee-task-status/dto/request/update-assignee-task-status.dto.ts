import { IsIdPermitted } from '../../../../common/decorators/is-permitted-id.decorator';
import { IUpdateAssigneeTaskStatus, PermissionType } from '../../../../types';
import { GetManagerAssigneeIdFieldDto } from '../../../assignee/dto/request/get-assignee-id-field.dto';

export class UpdateAssigneeTaskStatusDto extends GetManagerAssigneeIdFieldDto implements IUpdateAssigneeTaskStatus {
  @IsIdPermitted('task', PermissionType.MANAGER)
  taskId: number;

  @IsIdPermitted('workspaceStatus', PermissionType.MANAGER)
  statusId: number;
}
