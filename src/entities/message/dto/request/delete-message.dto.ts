import { IsInt } from 'class-validator';
import { EntityExists } from '../../../../shared/decorators/entity-exists.decorator';

export class DeleteMessageDto {
  @IsInt()
  @EntityExists('message')
  id: number;

  @IsInt()
  deletedBy: number;
}
