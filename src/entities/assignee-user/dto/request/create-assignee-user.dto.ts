import { ApiProperty } from '@nestjs/swagger';
import { IdExists } from '../../../../common/decorators/id-exists.decorator';
import { GetViewerAssigneeIdFieldDto } from '../../../assignee/dto/request/get-assignee-id-field.dto';

export class CreateAssigneeUserDto extends GetViewerAssigneeIdFieldDto {
  @ApiProperty()
  @IdExists('user')
  userId: number;
}
