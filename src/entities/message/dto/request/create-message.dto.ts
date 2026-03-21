import { IntersectionType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { GetAssigneeIdFieldDto } from '../../../assignee/dto/request/get-assignee-id-field.dto';
import { GetTaskIdFieldDto } from '../../../task/dto/request/get-task-id-field.dto';

export class CreateMessageDto extends IntersectionType(
  GetAssigneeIdFieldDto,
  GetTaskIdFieldDto
) {
  @IsString()
  content: string;
}
