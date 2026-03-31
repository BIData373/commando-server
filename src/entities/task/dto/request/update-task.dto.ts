import { PartialType } from '@nestjs/mapped-types';
import { IUpdateTask } from '../../../../types';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) implements IUpdateTask {}
