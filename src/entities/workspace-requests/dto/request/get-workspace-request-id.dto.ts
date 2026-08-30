import { GetIdDto } from '../../../../common/dto/request/get-id.dto';
import { WorkspaceError } from '../../../workspace/consts/workspace-error';

export class GetWorkspaceRequestIdDto extends GetIdDto('workspaceRequest', { filterDeletedAt: true, message: WorkspaceError.WORKSPACE_REQUEST_NOT_FOUND }) { }
