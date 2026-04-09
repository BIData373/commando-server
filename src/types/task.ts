import { OmittedMetaFields } from './common';
import { Prisma, Task } from './prisma';

export interface ITask extends Task { }

export interface ICreateTask extends Omit<Prisma.TaskUncheckedCreateInput, OmittedMetaFields | 'notes'> {
  notes?: object | null;
}

export interface IUpdateTask extends Partial<ICreateTask> { }
