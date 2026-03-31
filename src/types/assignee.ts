import { Assignee, Prisma } from './prisma';
import { OmittedMetaFields } from './common';

export interface IAssignee extends Assignee {}

export interface ICreateAssignee extends OmittedMetaFields<Prisma.AssigneeUncheckedCreateInput> {}

export interface IUpdateAssignee extends Partial<ICreateAssignee> {}
