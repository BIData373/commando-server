import { User, Prisma } from './prisma';
import { OmittedMetaFields } from './common';

export interface IUser extends User {}

export interface ICreateUser extends Omit<OmittedMetaFields<Prisma.UserUncheckedCreateInput>, 'info'> {
  info?: object | null;
}

export interface IUpdateUser extends Partial<ICreateUser> {}
