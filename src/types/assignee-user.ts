import { AssigneeUser, Prisma } from './prisma';
import { OmittedMetaFields } from './common';

export interface IAssigneeUser extends AssigneeUser {}

export interface ICreateAssigneeUser extends OmittedMetaFields<Prisma.AssigneeUserUncheckedCreateInput> {}
