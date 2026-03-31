import { Tag, Prisma } from './prisma';
import { OmittedMetaFields } from './common';

export interface ITag extends Tag {}

export interface ICreateTag extends OmittedMetaFields<Prisma.TagUncheckedCreateInput> {}

export interface IUpdateTag extends Partial<ICreateTag> {}
