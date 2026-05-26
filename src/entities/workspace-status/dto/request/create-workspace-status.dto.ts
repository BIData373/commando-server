import { ApiProperty } from '@nestjs/swagger';
import { IsIdPermitted } from '../../../../common/decorators/is-permitted-id.decorator';
import { PermissionType } from '../../../../types/prisma';
import { GetWorkspaceStatusFieldsDto } from './get-workspace-status-fields.dto';

export class CreateWorkspaceStatusDto extends GetWorkspaceStatusFieldsDto {
  @ApiProperty()
  @IsIdPermitted('workspace', PermissionType.MANAGER)
  workspaceId: number;
}
