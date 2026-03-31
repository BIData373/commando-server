import { IsEnum, IsInt } from 'class-validator';
import { ICreatePermission, PermissionType } from '../../../../types';

export class CreatePermissionDto implements ICreatePermission {
  @IsInt()
  userId: number;

  @IsInt()
  workspaceId: number;

  @IsEnum(PermissionType)
  type: PermissionType;
}
