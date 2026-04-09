import { OmittedMetaFields } from './common';
import { Prisma, Tag } from './prisma';

export interface ITag extends Tag { }

export interface ICreateTag extends Omit<Prisma.TagUncheckedCreateInput, OmittedMetaFields> { }

export interface IUpdateTag extends Partial<ICreateTag> { }
