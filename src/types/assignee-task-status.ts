import { AssigneeTaskStatus, Prisma } from './prisma';
import { OmittedMetaFields } from './common';

export interface IAssigneeTaskStatus extends AssigneeTaskStatus {}

export interface ICreateAssigneeTaskStatus extends OmittedMetaFields<Prisma.AssigneeTaskStatusUncheckedCreateInput> {}

export interface IUpdateAssigneeTaskStatus extends Partial<ICreateAssigneeTaskStatus> {}
