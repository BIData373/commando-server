import { IsIdPermitted } from '../../../../common/decorators/is-permitted-id.decorator';
import { ICreateWorkspaceStatus, PermissionType } from '../../../../types';
import { GetWorkspaceStatusFieldsDto } from './get-workspace-status-fields.dto';

export class CreateWorkspaceStatusDto extends GetWorkspaceStatusFieldsDto implements ICreateWorkspaceStatus {
  @IsIdPermitted('workspace', PermissionType.MANAGER)
  workspaceId: number
}