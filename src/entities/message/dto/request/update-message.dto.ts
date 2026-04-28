import { PartialType } from '@nestjs/mapped-types';
import { IUpdateMessage } from '../../../../types';
import { GetContentDto } from './get-content.dto';

export class UpdateMessageDto extends PartialType(GetContentDto) implements IUpdateMessage { }