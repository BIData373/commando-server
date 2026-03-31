import { IntersectionType } from '@nestjs/mapped-types';
import { IsEnum } from 'class-validator';
import { IUpdatePermission, PermissionType } from '../../../../types';
import { GetUserIdFieldDto } from '../../../user/dto/request/get-user-id-field.dto';
import { GetWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';

export class UpdatePermissionDto extends IntersectionType(
  GetUserIdFieldDto,
  GetWorkspaceIdFieldDto
) implements IUpdatePermission {
  @IsEnum(PermissionType)
  type: PermissionType;
}
