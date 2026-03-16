import { IsInt } from 'class-validator';
import { EntityExists } from '../../../../shared/decorators/entity-exists.decorator';

export class DeleteTagDto {
  @IsInt()
  @EntityExists('tag')
  id: number;
}
