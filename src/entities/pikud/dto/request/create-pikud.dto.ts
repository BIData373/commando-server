import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { GetNameDto } from '../../../../common/dto/request/get-name.dto';
import { ICreatePikud } from '../../../../types';

export class CreatePikudDto extends GetNameDto implements ICreatePikud {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  icon?: string;
}