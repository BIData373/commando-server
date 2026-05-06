import { PartialType } from '@nestjs/swagger';
import { IUpdatePikud } from '../../../../types';
import { CreatePikudDto } from './create-pikud.dto';

export class UpdatePikudDto extends PartialType(CreatePikudDto) implements IUpdatePikud {}
