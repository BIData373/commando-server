import { IntersectionType } from '@nestjs/mapped-types';
import { IsEnum } from 'class-validator';
import { PermissionType } from '../../../../../prisma';
import { GetUserIdFieldDto } from '../../../user/dto/request/get-user-id-field.dto';
import { GetWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';

export class UpdatePermissionDto extends IntersectionType(
  GetUserIdFieldDto,
  GetWorkspaceIdFieldDto
) {
  @IsEnum(PermissionType)
  type: PermissionType;
}
