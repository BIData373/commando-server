import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { EntityExists, IEntityExistsValidationOptions } from "../../../../common/decorators/entity-exists.decorator";
import { IsUrlName } from "../../../../common/decorators/is-url-name.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { IWorkspaceContext } from "../../interfaces/workspace-context.interface";

interface IUrlName {
  urlName: string
}

export function GetWorkspaceUrlNameMixin(
  options: IEntityExistsValidationOptions<IUrlName, "urlName", string, "workspace">
) {
  class GetWorkspaceUrlNameDto extends GetContextDto<IWorkspaceContext> {
    @ApiProperty()
    @EntityExists('workspace', {
      findArgs: ({ value }) => ({
        where: { urlName: value, deletedAt: null }
      }),
      ...options
    })
    @IsUrlName()
    urlName: string;
  }

  return GetWorkspaceUrlNameDto
}

export class GetWorkspaceUrlNameDto extends GetWorkspaceUrlNameMixin({ contextField: 'workspace' }) { }
export class GetOptionalWorkspaceUrlNameDto extends PartialType(GetWorkspaceUrlNameDto) { }

export class GetNewWorkspaceUrlNameDto extends GetWorkspaceUrlNameMixin({ failIfExists: true }) { }