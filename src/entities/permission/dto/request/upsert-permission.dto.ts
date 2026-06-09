import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { PermissionType } from '../../../../types/prisma';
import { CreateUserDto } from '../../../user/dto/request/create-user.dto';
import { GetManagerWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';

export class UpsertPermissionDto extends IntersectionType(
  GetManagerWorkspaceIdFieldDto,
  CreateUserDto
) {
  @ApiProperty({ enumName: 'PermissionType', enum: PermissionType })
  @IsEnum(PermissionType)
  type: PermissionType;
}
