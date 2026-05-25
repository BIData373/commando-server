import { ApiProperty } from '@nestjs/swagger';
import { IsObject, IsOptional, IsString } from 'class-validator';
import { IUserInfo } from '../../../../common/interfaces/user-info.interface';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  upn: string;

  // FIX Validation? Dto?
  @ApiProperty({ required: false })
  @IsObject()
  @IsOptional()
  info?: IUserInfo;
}
