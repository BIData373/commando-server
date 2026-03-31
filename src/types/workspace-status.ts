import { OmittedMetaFields } from './common';
import { Prisma, WorkspaceStatus } from './prisma';

export interface IWorkspaceStatus extends WorkspaceStatus { }

export interface ICreateWorkspaceStatus extends Omit<Prisma.WorkspaceStatusUncheckedCreateInput, OmittedMetaFields> { }

export interface IUpdateWorkspaceStatus extends Partial<ICreateWorkspaceStatus> { }
