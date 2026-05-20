import { ApiProperty } from '@nestjs/swagger';
import { IsIdPermitted } from '../../../../common/decorators/is-permitted-id.decorator';
import { ICreateMessage, PermissionType } from '../../../../types';
import { GetContentDto } from './get-content.dto';

export class CreateMessageDto extends GetContentDto implements ICreateMessage {
  @ApiProperty()
  @IsIdPermitted('task', PermissionType.MANAGER)
  taskId: number;

  @ApiProperty()
  @IsIdPermitted('assignee', PermissionType.MANAGER)
  assigneeId: number;
}
