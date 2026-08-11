import { GetIdDto } from '../../../../common/dto/request/get-id.dto';

export class GetWorkspaceRequestIdDto extends GetIdDto('workspaceRequest', { filterDeletedAt: true }) { }
