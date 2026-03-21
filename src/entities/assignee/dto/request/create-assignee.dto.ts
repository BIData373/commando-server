import { IsString } from 'class-validator';
import { GetNameDto } from '../../../../common/dto/request/get-name.dto';

export class CreateAssigneeDto extends GetNameDto {
  @IsString()
  color: string;
}
