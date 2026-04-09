import { OmittedMetaFields } from './common';
import { Prisma, User } from './prisma';

export interface IUserInfo {
  id: number
  upn: string
  name: string
  displayName: string
  isBI: boolean
}

export interface IUser extends Omit<User, 'info'> {
  info: IUserInfo | null
}

export interface ICreateUser extends Omit<Prisma.UserUncheckedCreateInput, OmittedMetaFields | 'info'> {
  info?: IUserInfo | null;
}

export interface IUpdateUser extends Partial<ICreateUser> { }

export interface IUserId {
  userId: number
}