import { OmittedMetaFields } from './common';
import { Prisma, Source } from './prisma';

export interface ISource extends Source { }

export interface ICreateSource extends Omit<Prisma.SourceUncheckedCreateInput, OmittedMetaFields> { }

export interface IUpdateSource extends Partial<Omit<ICreateSource, 'workspaceId'>> { }
