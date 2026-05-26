import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class CreateAssigneeTaskStatusDto {
  @ApiProperty()
  @IsInt()
  taskId: number;

  @ApiProperty()
  @IsInt()
  assigneeId: number;

  @ApiProperty()
  @IsInt()
  statusId: number;
}
