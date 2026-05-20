import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { IUpdateAssigneeTaskStatus } from '../../../../types';

export class CreateAssigneeTaskStatusDto implements IUpdateAssigneeTaskStatus {
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
