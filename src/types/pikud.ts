import { Pikud, Prisma } from './prisma';
import { OmittedMetaFields } from './common';

export interface IPikud extends Pikud {}

export interface ICreatePikud extends OmittedMetaFields<Prisma.PikudUncheckedCreateInput> {}

export interface IUpdatePikud extends Partial<ICreatePikud> {}
