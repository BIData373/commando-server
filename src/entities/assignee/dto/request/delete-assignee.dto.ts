import { IsInt } from 'class-validator';
import { EntityExists } from '../../../../shared/decorators/entity-exists.decorator';

export class DeleteAssigneeDto {
  @IsInt()
  @EntityExists('assignee')
  id: number;

  @IsInt()
  deletedBy: number;
}
