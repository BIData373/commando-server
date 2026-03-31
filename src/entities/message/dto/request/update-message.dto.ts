import { PartialType } from '@nestjs/mapped-types';
import { IUpdateMessage } from '../../../../types';
import { CreateMessageDto } from './create-message.dto';

export class UpdateMessageDto extends PartialType(CreateMessageDto) implements IUpdateMessage {}
