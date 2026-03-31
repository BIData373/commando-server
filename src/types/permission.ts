import { Permission, Prisma } from './prisma';
import { OmittedMetaFields } from './common';

export interface IPermission extends Permission {}

export interface ICreatePermission extends OmittedMetaFields<Prisma.PermissionUncheckedCreateInput> {}

export interface IUpdatePermission extends Partial<ICreatePermission> {}
