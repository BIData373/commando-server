import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { EntityExists, IEntityExistsValidationOptions } from "../../../../common/decorators/entity-exists.decorator";
import { IsUrlName } from "../../../../common/decorators/is-url-name.decorator";
import { GetContextDto, GetPartialContextDto } from "../../../../common/dto/request/get-context.dto";
import { IWorkspaceContext } from "../../interfaces/workspace-context.interface";

interface IUrlName {
  urlName: string
}

export function IsWorkspaceName(
  options: IEntityExistsValidationOptions<IUrlName, "urlName", string, "workspace">
): PropertyDecorator {
  return (target, propertyKey) => {
    ApiProperty()(target, propertyKey);
    EntityExists<IUrlName, "urlName", string, "workspace">('workspace', {
      findArgs: ({ value }) => ({
        where: { urlName: value, deletedAt: null }
      }),
      ...options
    })(target as IUrlName, propertyKey as "urlName");
    IsUrlName()(target as IUrlName, propertyKey as "urlName");
  };
}

export function GetWorkspaceUrlNameMixin(
  options: IEntityExistsValidationOptions<IUrlName, "urlName", string, "workspace">
) {
  class GetWorkspaceUrlNameDto extends GetContextDto<IWorkspaceContext> {
    @IsWorkspaceName(options)
    urlName: string;
  }

  return GetWorkspaceUrlNameDto
}

export class GetWorkspaceUrlNameDto extends GetWorkspaceUrlNameMixin({ contextField: 'workspace' }) { }

export class GetOptionalWorkspaceUrlNameDto extends GetPartialContextDto<IWorkspaceContext> {
  @IsOptional()
  @IsWorkspaceName({ contextField: 'workspace' })
  urlName?: string;
}

export class GetNewWorkspaceUrlNameDto extends GetWorkspaceUrlNameMixin({ failIfExists: true }) { }