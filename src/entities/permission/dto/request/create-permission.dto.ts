import { IsEnum, IsInt } from 'class-validator';
import { PermissionType } from '../../../../../prisma';

export class CreatePermissionDto {
  @IsInt()
  userId: number;

  @IsInt()
  workspaceId: number;

  @IsEnum(PermissionType)
  type: PermissionType;
}
