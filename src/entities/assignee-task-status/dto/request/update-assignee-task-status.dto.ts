import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { IsIdPermitted } from '../../../../common/decorators/is-permitted-id.decorator';
import { PermissionType } from '../../../../types/prisma';
import { GetManagerAssigneeIdFieldDto } from '../../../assignee/dto/request/get-assignee-id-field.dto';

export class UpdateAssigneeTaskStatusDto extends GetManagerAssigneeIdFieldDto {
  @ApiProperty()
  @IsIdPermitted('task', PermissionType.MANAGER, { filterDeletedAt: true })
  taskId: number;

  @ApiProperty()
  @IsIdPermitted('workspaceStatus', PermissionType.MANAGER)
  statusId: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string
}
