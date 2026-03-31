import { Message, Prisma } from './prisma';
import { OmittedMetaFields } from './common';

export interface IMessage extends Message {}

export interface ICreateMessage extends OmittedMetaFields<Prisma.MessageUncheckedCreateInput> {}

export interface IUpdateMessage extends Partial<ICreateMessage> {}
