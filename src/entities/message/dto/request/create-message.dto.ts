import { ApiProperty } from '@nestjs/swagger';
import { IdExists } from '../../../../common/decorators/id-exists.decorator';
import { IsIdPermitted } from '../../../../common/decorators/is-permitted-id.decorator';
import { PermissionType } from '../../../../types/prisma';
import { GetContentDto } from './get-content.dto';

export class CreateMessageDto extends GetContentDto {
  @ApiProperty()
  @IsIdPermitted('task', PermissionType.MANAGER)
  taskId: number;

  @ApiProperty()
  @IdExists('user')
  userId: number;
}
