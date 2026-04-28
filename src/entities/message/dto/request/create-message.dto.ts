import { IsIdPermitted } from '../../../../common/decorators/is-permitted-id.decorator';
import { ICreateMessage, PermissionType } from '../../../../types';
import { GetContentDto } from './get-content.dto';

export class CreateMessageDto extends GetContentDto implements ICreateMessage {
  @IsIdPermitted('task', PermissionType.MANAGER)
  taskId: number;

  @IsIdPermitted('assignee', PermissionType.MANAGER)
  assigneeId: number;
}
