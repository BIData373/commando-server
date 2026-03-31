import { IntersectionType } from '@nestjs/mapped-types';
import { GetNameDto } from '../../../../common/dto/request/get-name.dto';
import { GetWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';
import { ICreateTag } from '../../../../types';

export class CreateTagDto extends IntersectionType(
  GetNameDto,
  GetWorkspaceIdFieldDto
) implements ICreateTag { }