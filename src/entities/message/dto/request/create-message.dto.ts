import { IsInt, IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  content: string;

  @IsInt()
  assigneeId: number;

  @IsInt()
  taskId: number;

  @IsInt()
  createdBy: number;

  @IsInt()
  updatedBy: number;
}
