import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreatePikudDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  icon?: string;

  @IsInt()
  createdBy: number;

  @IsInt()
  updatedBy: number;
}
