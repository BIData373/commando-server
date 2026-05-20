import { ApiProperty } from '@nestjs/swagger';
import { IsObject, IsOptional, IsString } from 'class-validator';
import { ICreateUser, IUserInfo } from '../../../../types';

export class CreateUserDto implements ICreateUser {
  @ApiProperty()
  @IsString()
  upn: string;

  // FIX Validation?
  @ApiProperty({ required: false })
  @IsObject()
  @IsOptional()
  info?: IUserInfo;
}
