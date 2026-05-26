import { PartialType } from '@nestjs/swagger';
import { GetContentDto } from './get-content.dto';

export class UpdateMessageDto extends PartialType(GetContentDto) { }