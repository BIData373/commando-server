import { OmittedMetaFields } from './common';
import { Permission, Prisma } from './prisma';

export interface IPermission extends Permission { }

export interface IUpdatePermission extends Omit<Prisma.PermissionUncheckedCreateInput, OmittedMetaFields | 'userId'> {
    upn: string
}