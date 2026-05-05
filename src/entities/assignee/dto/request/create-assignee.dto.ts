import { IsOptional } from 'class-validator';
import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';
import { ICreateAssignee } from '../../../../types';
import { GetManagerWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';

export class CreateAssigneeDto extends GetManagerWorkspaceIdFieldDto implements ICreateAssignee {
  @IsNotEmptyString()
  name: string

  @IsNotEmptyString()
  color: string;

  @IsOptional()
  @IsNotEmptyString()
  icon?: string;
}
