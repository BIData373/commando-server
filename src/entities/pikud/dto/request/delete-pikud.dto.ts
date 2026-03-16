import { IsInt } from 'class-validator';
import { EntityExists } from '../../../../shared/decorators/entity-exists.decorator';

export class DeletePikudDto {
  @IsInt()
  @EntityExists('pikud')
  id: number;

  @IsInt()
  deletedBy: number;
}
