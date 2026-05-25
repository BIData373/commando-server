import { PartialType } from '@nestjs/swagger';
import { CreateAssigneeDto } from './create-assignee.dto';

export class UpdateAssigneeDto extends PartialType(CreateAssigneeDto) { }
