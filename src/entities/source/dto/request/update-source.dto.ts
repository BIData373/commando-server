import { PartialType } from '@nestjs/mapped-types';
import { IUpdateSource } from '../../../../types';
import { CreateSourceDto } from './create-source.dto';

export class UpdateSourceDto extends PartialType(CreateSourceDto) implements IUpdateSource {}
