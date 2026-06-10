import { IntersectionType } from '@nestjs/swagger';
import { GetManagerWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';
import { GetAssigneeFieldsDto } from './get-assignee-fields.dto';

export class CreateAssigneeDto extends IntersectionType(
  GetManagerWorkspaceIdFieldDto,
  GetAssigneeFieldsDto
) { }
