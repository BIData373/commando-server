import { PartialType } from '@nestjs/mapped-types';
import { CreateAssigneeDto } from './create-assignee.dto';

export class UpdateAssigneeDto extends PartialType(CreateAssigneeDto) {}
