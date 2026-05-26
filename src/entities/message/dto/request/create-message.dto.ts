import { ApiProperty } from '@nestjs/swagger';
import { IsIdPermitted } from '../../../../common/decorators/is-permitted-id.decorator';
import { PermissionType } from '../../../../types/prisma';
import { GetContentDto } from './get-content.dto';

export class CreateMessageDto extends GetContentDto {
  @ApiProperty()
  @IsIdPermitted('task', PermissionType.MANAGER)
  taskId: number;

  @ApiProperty()
  @IsIdPermitted('assignee', PermissionType.MANAGER)
  assigneeId: number;
}
