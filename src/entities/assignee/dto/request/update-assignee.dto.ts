import { PartialType } from '@nestjs/swagger';
import { IUpdateAssignee } from '../../../../types';
import { CreateAssigneeDto } from './create-assignee.dto';

export class UpdateAssigneeDto extends PartialType(CreateAssigneeDto) implements IUpdateAssignee { }
