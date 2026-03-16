import { IsInt, IsString } from 'class-validator';

export class CreateTagDto {
  @IsString()
  name: string;

  @IsInt()
  workspaceId: number;

  @IsInt()
  createdBy: number;

  @IsInt()
  updatedBy: number;
}
