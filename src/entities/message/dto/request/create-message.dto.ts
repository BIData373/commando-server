import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { GetViewerTaskIdFieldDto } from '../../../task/dto/request/get-task-id-field.dto';

export class CreateMessageDto extends GetViewerTaskIdFieldDto {
  @ApiProperty()
  @IsString()
  content: string;
}