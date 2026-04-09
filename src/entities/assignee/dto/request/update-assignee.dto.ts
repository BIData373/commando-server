import { PartialType } from '@nestjs/mapped-types';
import { IUpdateAssignee } from '../../../../types';
import { CreateAssigneeDto } from './create-assignee.dto';

export class UpdateAssigneeDto extends PartialType(CreateAssigneeDto) implements IUpdateAssignee { }
