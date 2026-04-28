import { IsEnum } from 'class-validator';
import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';
import { IUpdatePermission, PermissionType } from '../../../../types';
import { GetManagerWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';

export class UpdatePermissionDto extends GetManagerWorkspaceIdFieldDto implements IUpdatePermission {
  @IsNotEmptyString()
  upn: string;

  @IsEnum(PermissionType)
  type: PermissionType;
}
