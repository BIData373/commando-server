import { Source, Prisma } from './prisma';
import { OmittedMetaFields } from './common';

export interface ISource extends Source {}

export interface ICreateSource extends OmittedMetaFields<Prisma.SourceUncheckedCreateInput> {}

export interface IUpdateSource extends Partial<ICreateSource> {}
