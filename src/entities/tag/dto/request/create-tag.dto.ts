import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';
import { ICreateTag, PermissionType } from '../../../../types';
import { GetPermittedWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';

export class CreateTagDto extends GetPermittedWorkspaceIdFieldDto(PermissionType.MANAGER) implements ICreateTag {
  @IsNotEmptyString()
  name: string;
}