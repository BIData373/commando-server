import { IsInt } from 'class-validator';
import { EntityExists } from '../../../../shared/decorators/entity-exists.decorator';

export class DeleteTaskDto {
  @IsInt()
  @EntityExists('task')
  id: number;

  @IsInt()
  deletedBy: number;
}
