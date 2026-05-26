import { PartialType } from '@nestjs/swagger';
import { CreatePikudDto } from './create-pikud.dto';

export class UpdatePikudDto extends PartialType(CreatePikudDto) { }
