import { CreateErrorDto } from '../../../../common/dto/response/error.dto';
import { WorkspaceError } from '../../consts/workspace-error';

export class WorkspaceErrorDto extends CreateErrorDto(WorkspaceError) { }
