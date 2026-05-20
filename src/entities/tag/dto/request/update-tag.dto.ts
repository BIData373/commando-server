import { PartialType } from '@nestjs/swagger';
import { IUpdateTag } from '../../../../types';
import { CreateTagDto } from './create-tag.dto';

export class UpdateTagDto extends PartialType(CreateTagDto) implements IUpdateTag {}
