import { CreateErrorDto } from '../../../../common/dto/response/error.dto';

export class CreateWorkspaceRequestErrorDto extends CreateErrorDto([
  'urlname-exists',
  'title-exists',
  'pikud-not-found',
]) { }

export class WorkspaceRequestNotFoundErrorDto extends CreateErrorDto([
  'workspace-request-not-found',
]) { }

export class UpdateWorkspaceRequestErrorDto extends CreateErrorDto([
  'workspace-request-not-found',
  'urlname-exists',
  'title-exists',
  'pikud-not-found',
]) { }
