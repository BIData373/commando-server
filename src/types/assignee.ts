import { OmittedMetaFields } from './common';
import { Assignee, Prisma } from './prisma';

export interface IAssignee extends Assignee { }

export interface ICreateAssignee extends Omit<Prisma.AssigneeUncheckedCreateInput, OmittedMetaFields> { }

export interface IUpdateAssignee extends Partial<ICreateAssignee> { }
