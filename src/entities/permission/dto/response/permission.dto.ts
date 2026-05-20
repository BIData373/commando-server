import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IPermission, PermissionType } from '../../../../types';

@Exclude()
export class PermissionDto implements IPermission {
  @ExposeProperty()
  userId: number;

  @ExposeProperty()
  workspaceId: number;

  @ExposeProperty({ enum: PermissionType })
  type: PermissionType;
}
