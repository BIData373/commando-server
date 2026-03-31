import { OmittedMetaFields } from './common';
import { Pikud, Prisma } from './prisma';

export interface IPikud extends Pikud { }

export interface ICreatePikud extends Omit<Prisma.PikudUncheckedCreateInput, OmittedMetaFields> { }

export interface IUpdatePikud extends Partial<ICreatePikud> { }
