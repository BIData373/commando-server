import { PartialType } from '@nestjs/swagger';
import { GetSourceAttachmentFieldsDto } from './get-source-attachment-fields.dto';

export class UpdateSourceAttachmentDto extends PartialType(GetSourceAttachmentFieldsDto) { }
