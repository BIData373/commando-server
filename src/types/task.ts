import { Task, Prisma } from './prisma';
import { OmittedMetaFields } from './common';

export interface ITask extends Task {}

export interface ICreateTask extends Omit<OmittedMetaFields<Prisma.TaskUncheckedCreateInput>, 'notes'> {
  notes?: object | null;
}

export interface IUpdateTask extends Partial<ICreateTask> {}
