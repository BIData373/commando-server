import { PartialType } from '@nestjs/mapped-types';
import { IUpdateTag } from '../../../../types';
import { CreateTagDto } from './create-tag.dto';

export class UpdateTagDto extends PartialType(CreateTagDto) implements IUpdateTag {}
