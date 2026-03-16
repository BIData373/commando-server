import { IsObject, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  upn: string;

  @IsObject()
  @IsOptional()
  info?: object;
}
