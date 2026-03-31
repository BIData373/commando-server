import { OmittedMetaFields } from './common';
import { Prisma, TaskHistory } from './prisma';

export interface ITaskHistory extends TaskHistory {}

export interface ICreateTaskHistory extends Omit<Prisma.TaskHistoryUncheckedCreateInput, OmittedMetaFields> {}
