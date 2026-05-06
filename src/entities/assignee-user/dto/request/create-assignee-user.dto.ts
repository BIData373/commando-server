import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { ICreateAssigneeUser } from '../../../../types';
import { GetViewerAssigneeIdFieldDto } from '../../../assignee/dto/request/get-assignee-id-field.dto';
import { IdExists } from '../../../../common/decorators/id-exists.decorator';

export class CreateAssigneeUserDto extends GetViewerAssigneeIdFieldDto implements ICreateAssigneeUser {
  @ApiProperty()
  @IdExists('user')
  userId: number;
}
