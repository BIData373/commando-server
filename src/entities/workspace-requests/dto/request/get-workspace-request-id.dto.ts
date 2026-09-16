import { GetIdDto } from '../../../../common/dto/request/get-id.dto';
import { WorkspaceRequestError } from '../../enum/workspace-request-error';

export class GetWorkspaceRequestIdDto extends GetIdDto('workspaceRequest', { filterDeletedAt: true, message: WorkspaceRequestError.NOT_FOUND }) { }
