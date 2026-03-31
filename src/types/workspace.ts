import { Workspace, Prisma } from './prisma';
import { OmittedMetaFields } from './common';

export interface IWorkspace extends Workspace {}

export interface ICreateWorkspace extends OmittedMetaFields<Prisma.WorkspaceUncheckedCreateInput> {}

export interface IUpdateWorkspace extends Partial<ICreateWorkspace> {}
