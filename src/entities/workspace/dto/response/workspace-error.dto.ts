import { ErrorDtoMixin } from '../../../../common/dto/response/error-dto-mixin.dto';
import { WorkspaceError } from '../../enum/workspace-error';

export class CreateWorkspaceErrorDto extends ErrorDtoMixin([
  WorkspaceError.URL_NAME_EXISTS,
  WorkspaceError.TITLE_EXISTS,
  WorkspaceError.PIKUD_NOT_FOUND,
]) { }

export class UpdateWorkspaceErrorDto extends ErrorDtoMixin([
  WorkspaceError.URL_NAME_EXISTS,
  WorkspaceError.TITLE_EXISTS,
]) { }
