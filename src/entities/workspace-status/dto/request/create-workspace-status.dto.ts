import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';
import { ICreateWorkspaceStatus } from '../../../../types';
import { GetManagerWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';

export class CreateWorkspaceStatusDto extends GetManagerWorkspaceIdFieldDto implements ICreateWorkspaceStatus {
  @IsNotEmptyString()
  name: string;

  @IsNotEmptyString()
  color: string;

  // FIX Enum?
  @IsNotEmptyString()
  statusType: string;
}
