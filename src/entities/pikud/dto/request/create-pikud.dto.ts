import { IsOptional, IsString } from 'class-validator';
import { GetNameDto } from '../../../../common/dto/request/get-name.dto';

export class CreatePikudDto extends GetNameDto {
  @IsString()
  @IsOptional()
  icon?: string;
}
