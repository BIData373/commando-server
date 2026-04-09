import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';
import { ICreateTag } from '../../../../types';
import { GetWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';

export class CreateTagDto extends GetWorkspaceIdFieldDto implements ICreateTag {
  @IsNotEmptyString()
  name: string;
}