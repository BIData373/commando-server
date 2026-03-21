import { IsInt } from 'class-validator';
import { EntityExists } from '../../../../common/decorators/entity-exists.decorator';

export class DeleteSourceDto {
  @IsInt()
  @EntityExists('source')
  id: number;

  @IsInt()
  deletedBy: number;
}
