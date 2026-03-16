import { IsEnum } from 'class-validator';
import { PermissionType } from '../../../../../prisma/generated';

export class UpdatePermissionDto {
  @IsEnum(PermissionType)
  type: PermissionType;
}
