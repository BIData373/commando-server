import { PartialType } from '@nestjs/swagger';
import { GetSourceFieldsDto } from './get-source-fields.dto';

export class UpdateSourceDto extends PartialType(GetSourceFieldsDto) { }
