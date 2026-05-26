import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';
import { PermissionType } from '../../../../types/prisma';
import { GetManagerWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';

export class UpdatePermissionDto extends GetManagerWorkspaceIdFieldDto {
  @ApiProperty()
  @IsNotEmptyString()
  upn: string;

  @ApiProperty({ enum: PermissionType })
  @IsEnum(PermissionType)
  type: PermissionType;
}
