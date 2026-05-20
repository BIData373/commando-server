import { PartialType } from '@nestjs/swagger';
import { IUpdateTask } from '../../../../types';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) implements IUpdateTask {}
