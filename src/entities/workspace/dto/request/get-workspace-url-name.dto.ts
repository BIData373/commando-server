import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { EntityExists, IEntityExistsValidationOptions } from "../../../../common/decorators/entity-exists.decorator";
import { IsNotEmptyString } from "../../../../common/decorators/is-not-empty-string.decorator";
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
    @IsNotEmptyString()
    @EntityExists('workspace', {
      findArgs: ({ value }) => ({
        where: { urlName: value, deletedAt: null }
      }),
      ...options
    })
    urlName: string;
  }

  return GetWorkspaceUrlNameDto
}

export class GetWorkspaceUrlNameDto extends GetWorkspaceUrlNameMixin({ contextField: 'workspace' }) { }
export class GetOptionalWorkspaceUrlNameDto extends PartialType(GetWorkspaceUrlNameDto) { }

export class GetNewWorkspaceUrlNameDto extends GetWorkspaceUrlNameMixin({ failIfExists: true }) { }