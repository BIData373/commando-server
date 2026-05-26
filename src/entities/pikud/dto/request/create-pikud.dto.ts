import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { GetNameDto } from '../../../../common/dto/request/get-name.dto';

export class CreatePikudDto extends GetNameDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  icon?: string;
}