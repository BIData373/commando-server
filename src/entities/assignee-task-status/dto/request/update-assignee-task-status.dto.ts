import { ApiProperty } from '@nestjs/swagger';
import { IsIdPermitted } from '../../../../common/decorators/is-permitted-id.decorator';
import { IUpdateAssigneeTaskStatus, PermissionType } from '../../../../types';
import { GetManagerAssigneeIdFieldDto } from '../../../assignee/dto/request/get-assignee-id-field.dto';

export class UpdateAssigneeTaskStatusDto extends GetManagerAssigneeIdFieldDto implements IUpdateAssigneeTaskStatus {
  @ApiProperty()
  @IsIdPermitted('task', PermissionType.MANAGER)
  taskId: number;

  @ApiProperty()
  @IsIdPermitted('workspaceStatus', PermissionType.MANAGER)
  statusId: number;
}
