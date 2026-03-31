import { IsObject, IsOptional, IsString } from 'class-validator';
import { ICreateUser } from '../../../../types';

export class CreateUserDto implements ICreateUser {
  @IsString()
  upn: string;

  @IsObject()
  @IsOptional()
  info?: object;
}
