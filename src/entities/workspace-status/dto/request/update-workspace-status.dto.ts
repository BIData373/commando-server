import { PartialType } from '@nestjs/swagger';
import { GetWorkspaceStatusFieldsDto } from './get-workspace-status-fields.dto';

export class UpdateWorkspaceStatusDto extends PartialType(GetWorkspaceStatusFieldsDto) { }
