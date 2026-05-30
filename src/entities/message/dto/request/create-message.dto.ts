import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { IdExists } from '../../../../common/decorators/id-exists.decorator';
import { GetManagerTaskIdFieldDto } from '../../../task/dto/request/get-task-id-field.dto';

export class CreateMessageDto extends GetManagerTaskIdFieldDto {
  @ApiProperty()
  @IsString()
  content: string;

  @ApiProperty()
  @IdExists('user')
  userId: number;
}
