import { PartialType } from '@nestjs/mapped-types';
import { IUpdateWorkspaceStatus } from '../../../../types';
import { GetWorkspaceStatusFieldsDto } from './get-workspace-status-fields.dto';

export class UpdateWorkspaceStatusDto extends PartialType(GetWorkspaceStatusFieldsDto) implements IUpdateWorkspaceStatus { }
