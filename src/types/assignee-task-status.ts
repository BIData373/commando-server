import { OmittedMetaFields } from './common';
import { AssigneeTaskStatus, Prisma } from './prisma';

export interface IAssigneeTaskStatus extends AssigneeTaskStatus { }

export interface ICreateAssigneeTaskStatus extends Omit<Prisma.AssigneeTaskStatusUncheckedCreateInput, OmittedMetaFields> { }

export interface IUpdateAssigneeTaskStatus extends Partial<ICreateAssigneeTaskStatus> { }
