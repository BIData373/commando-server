import { Exclude, Expose } from 'class-transformer';
import { IPermission, PermissionType } from '../../../../types';

@Exclude()
export class PermissionDto implements IPermission {
  // FIX Whole relation?
  @Expose()
  userId: number;

  @Expose()
  workspaceId: number;

  @Expose()
  type: PermissionType;
}
