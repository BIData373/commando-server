import { OmittedMetaFields } from './common';
import { Message, Prisma } from './prisma';

export interface IMessage extends Message { }

export interface ICreateMessage extends Omit<Prisma.MessageUncheckedCreateInput, OmittedMetaFields> { }

export interface IUpdateMessage extends Partial<ICreateMessage> { }
