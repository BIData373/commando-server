import { OmittedMetaFields } from './common';
import { Prisma, User } from './prisma';

export interface IUser extends User { }

export interface ICreateUser extends Omit<Prisma.UserUncheckedCreateInput, OmittedMetaFields | 'info'> {
  info?: object | null;
}

export interface IUpdateUser extends Partial<ICreateUser> { }
