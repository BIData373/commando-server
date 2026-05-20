import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';
import { ICreateTag, PermissionType } from '../../../../types';
import { GetPermittedWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';

export class CreateTagDto extends GetPermittedWorkspaceIdFieldDto(PermissionType.MANAGER) implements ICreateTag {
  @ApiProperty()
  @IsNotEmptyString()
  name: string;
}