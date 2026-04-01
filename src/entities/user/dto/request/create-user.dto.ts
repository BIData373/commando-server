import { IsObject, IsOptional, IsString } from 'class-validator';
import { ICreateUser, IUser } from '../../../../types';

export class CreateUserDto implements ICreateUser {
  @IsString()
  upn: string;

  // FIX Validation?
  @IsObject()
  @IsOptional()
  info?: IUser;
}
