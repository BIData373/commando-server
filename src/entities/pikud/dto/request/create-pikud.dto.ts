import { IsOptional, IsString } from 'class-validator';
import { GetNameDto } from '../../../../common/dto/request/get-name.dto';
import { ICreatePikud } from '../../../../types';

export class CreatePikudDto extends GetNameDto implements ICreatePikud {
  @IsString()
  @IsOptional()
  icon?: string;
}