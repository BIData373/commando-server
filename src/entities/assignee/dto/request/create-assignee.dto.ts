import { IsString } from 'class-validator';
import { GetNameDto } from '../../../../common/dto/request/get-name.dto';
import { ICreateAssignee } from '../../../../types';

export class CreateAssigneeDto extends GetNameDto implements ICreateAssignee {
  @IsString()
  color: string;
}
