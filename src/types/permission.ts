import { OmittedMetaFields } from './common';
import { Permission, Prisma } from './prisma';
import { IUserId } from './user';
import { IWorkspaceId } from './workspace';

export interface IPermission extends Permission { }

export interface IUpdatePermission extends Omit<Prisma.PermissionUncheckedCreateInput, OmittedMetaFields | 'userId'> {
    upn: string
}

export interface IDeletePermission extends
    IUserId,
    IWorkspaceId { }