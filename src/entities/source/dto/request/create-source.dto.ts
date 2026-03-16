import { IsInt, IsString } from 'class-validator';

export class CreateSourceDto {
  @IsString()
  name: string;

  @IsInt()
  createdBy: number;

  @IsInt()
  updatedBy: number;
}
