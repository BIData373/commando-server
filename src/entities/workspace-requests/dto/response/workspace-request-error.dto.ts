import { CreateErrorDto } from '../../../../common/dto/response/error.dto';
import { WorkspaceError } from '../../../workspace/consts/workspace-error';

export class WorkspaceRequestErrorDto extends CreateErrorDto(WorkspaceError) { }
