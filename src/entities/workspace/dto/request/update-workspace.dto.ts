import { PartialType } from '@nestjs/swagger';
import { IUpdateWorkspace } from '../../../../types';
import { CreateWorkspaceDto } from './create-workspace.dto';

export class UpdateWorkspaceDto extends PartialType(CreateWorkspaceDto) implements IUpdateWorkspace {}
