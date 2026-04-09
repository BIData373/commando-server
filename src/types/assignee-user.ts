import { OmittedMetaFields } from './common';
import { AssigneeUser, Prisma } from './prisma';

export interface IAssigneeUser extends AssigneeUser { }

export interface ICreateAssigneeUser extends Omit<Prisma.AssigneeUserUncheckedCreateInput, OmittedMetaFields> { }
