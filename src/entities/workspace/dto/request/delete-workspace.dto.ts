import { IsInt } from 'class-validator';
import { EntityExists } from '../../../../shared/decorators/entity-exists.decorator';

export class DeleteWorkspaceDto {
  @IsInt()
  @EntityExists('workspace')
  id: number;

  @IsInt()
  deletedBy: number;
}
