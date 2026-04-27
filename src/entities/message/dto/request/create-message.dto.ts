import { Type } from 'class-transformer';
import { IsString } from 'class-validator';
import { EntityExists } from '../../../../common/decorators/entity-exists.decorator';
import { IsPositiveInt } from '../../../../common/decorators/is-positive-int.decorator';
import { ICreateMessage } from '../../../../types';
import { GetAssigneeIdFieldDto } from '../../../assignee/dto/request/get-assignee-id-field.dto';

// FIX Get task with permission check
export class CreateMessageDto extends GetAssigneeIdFieldDto implements ICreateMessage {
  @Type(() => Number)
  @EntityExists('task')
  @IsPositiveInt()
  taskId: number;

  @IsString()
  content: string;
}
