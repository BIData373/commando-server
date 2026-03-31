import { TaskHistory, Prisma } from './prisma';
import { OmittedMetaFields } from './common';

export interface ITaskHistory extends TaskHistory {}

export interface ICreateTaskHistory extends OmittedMetaFields<Prisma.TaskHistoryUncheckedCreateInput> {}
