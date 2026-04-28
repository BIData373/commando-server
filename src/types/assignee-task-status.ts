import { AssigneeTaskStatus, Prisma } from './prisma';

export interface IAssigneeTaskStatus extends AssigneeTaskStatus { }

export interface IUpdateAssigneeTaskStatus extends Prisma.AssigneeTaskStatusUncheckedCreateInput { }