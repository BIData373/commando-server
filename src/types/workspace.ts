import { OmittedMetaFields } from './common';
import { Prisma, Workspace } from './prisma';

export interface IWorkspace extends Workspace {}

export interface ICreateWorkspace extends Omit<Prisma.WorkspaceUncheckedCreateInput, OmittedMetaFields> {}

export interface IUpdateWorkspace extends Partial<ICreateWorkspace> {}

export interface IWorkspaceId {
    workspaceId: number
}