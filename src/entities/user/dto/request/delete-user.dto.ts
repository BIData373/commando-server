import { IsInt } from 'class-validator';
import { EntityExists } from '../../../../common/decorators/entity-exists.decorator';

export class DeleteUserDto {
  @IsInt()
  @EntityExists('user')
  id: number;
}
