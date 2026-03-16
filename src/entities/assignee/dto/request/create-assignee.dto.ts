import { IsInt, IsString } from 'class-validator';

export class CreateAssigneeDto {
  @IsString()
  name: string;

  @IsString()
  color: string;

  @IsInt()
  createdBy: number;

  @IsInt()
  updatedBy: number;
}
