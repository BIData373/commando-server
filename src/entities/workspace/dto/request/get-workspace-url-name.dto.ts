import { applyDecorators } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { EntityExists, IEntityExistsValidationOptions } from "../../../../common/decorators/entity-exists.decorator";
import { IsUrlName } from "../../../../common/decorators/is-url-name.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { WorkspaceError } from "../../consts/workspace-error";
import { IWorkspaceContext } from "../../interfaces/workspace-context.interface";

interface IUrlName {
  urlName: string
}

export function IsWorkspaceUrlName(
  options: IEntityExistsValidationOptions<IUrlName, "urlName", string, "workspace">
): PropertyDecorator {
  return applyDecorators(
    ApiProperty(),
    EntityExists<IUrlName, "urlName", string, "workspace">('workspace', {
      findArgs: ({ value }) => ({
        where: { urlName: value, deletedAt: null }
      }),
      ...options
    }) as PropertyDecorator,
    IsUrlName(),
  ) as PropertyDecorator;
}

export function GetWorkspaceUrlNameMixin(
  options: IEntityExistsValidationOptions<IUrlName, "urlName", string, "workspace">
) {
  class GetWorkspaceUrlNameDto extends GetContextDto<IWorkspaceContext> {
    @IsWorkspaceUrlName(options)
    urlName: string;
  }

  return GetWorkspaceUrlNameDto
}

export class GetWorkspaceUrlNameDto extends GetWorkspaceUrlNameMixin({ contextField: 'workspace' }) { }

export class GetOptionalWorkspaceUrlNameDto extends GetContextDto<Partial<IWorkspaceContext>> {
  @IsOptional()
  @IsWorkspaceUrlName({ contextField: 'workspace' })
  urlName?: string;
}

export class GetNewWorkspaceUrlNameDto extends GetWorkspaceUrlNameMixin({ failIfExists: true, message: WorkspaceError.URL_NAME_EXISTS }) { }