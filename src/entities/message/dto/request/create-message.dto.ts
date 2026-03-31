import { IntersectionType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { GetAssigneeIdFieldDto } from '../../../assignee/dto/request/get-assignee-id-field.dto';
import { GetTaskIdFieldDto } from '../../../task/dto/request/get-task-id-field.dto';
import { ICreateMessage } from '../../../../types';

export class CreateMessageDto extends IntersectionType(
  GetAssigneeIdFieldDto,
  GetTaskIdFieldDto
) implements ICreateMessage {
  @IsString()
  content: string;
}
