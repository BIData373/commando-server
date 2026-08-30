import { ErrorDtoMixin } from '../../../../common/dto/response/error-dto-mixin.dto';
import { WorkspaceRequestError } from '../../enum/workspace-request-error';

export class CreateWorkspaceRequestErrorDto extends ErrorDtoMixin([
  WorkspaceRequestError.URL_NAME_EXISTS,
  WorkspaceRequestError.TITLE_EXISTS,
  WorkspaceRequestError.PIKUD_NOT_FOUND,
]) { }

export class WorkspaceRequestNotFoundErrorDto extends ErrorDtoMixin([
  WorkspaceRequestError.NOT_FOUND,
]) { }

export class UpdateWorkspaceRequestErrorDto extends ErrorDtoMixin([
  WorkspaceRequestError.NOT_FOUND,
  WorkspaceRequestError.URL_NAME_EXISTS,
  WorkspaceRequestError.TITLE_EXISTS,
  WorkspaceRequestError.PIKUD_NOT_FOUND,
]) { }
