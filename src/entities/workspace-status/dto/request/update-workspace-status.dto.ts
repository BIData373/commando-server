import { PartialType } from '@nestjs/mapped-types';
import { IUpdateWorkspaceStatus } from '../../../../types';
import { CreateWorkspaceStatusDto } from './create-workspace-status.dto';

export class UpdateWorkspaceStatusDto extends PartialType(CreateWorkspaceStatusDto) implements IUpdateWorkspaceStatus {}
