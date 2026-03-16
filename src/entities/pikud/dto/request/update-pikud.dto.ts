import { PartialType } from '@nestjs/mapped-types';
import { CreatePikudDto } from './create-pikud.dto';

export class UpdatePikudDto extends PartialType(CreatePikudDto) {}
