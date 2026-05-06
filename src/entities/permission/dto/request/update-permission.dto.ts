import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';
import { IUpdatePermission, PermissionType } from '../../../../types';
import { GetManagerWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';

export class UpdatePermissionDto extends GetManagerWorkspaceIdFieldDto implements IUpdatePermission {
  @ApiProperty()
  @IsNotEmptyString()
  upn: string;

  @ApiProperty({ enum: PermissionType })
  @IsEnum(PermissionType)
  type: PermissionType;
}
