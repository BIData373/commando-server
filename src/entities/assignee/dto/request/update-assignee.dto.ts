import { PartialType } from '@nestjs/swagger';
import { GetAssigneeFieldsDto } from './get-assignee-fields.dto';

export class UpdateAssigneeDto extends PartialType(GetAssigneeFieldsDto) { }
