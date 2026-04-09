import { IsInt } from 'class-validator';
import { EntityExists } from '../../../../common/decorators/entity-exists.decorator';

export class DeleteWorkspaceStatusDto {
  @IsInt()
  @EntityExists('workspaceStatus')
  id: number;
}
