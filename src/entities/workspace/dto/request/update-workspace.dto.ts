import { ApiPropertyOptional, IntersectionType, PartialType } from '@nestjs/swagger';
import { IsOptional, MaxLength } from 'class-validator';
import { EntityExists } from '../../../../common/decorators/entity-exists.decorator';
import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';
import { IsUrlName } from '../../../../common/decorators/is-url-name.decorator';
import { GetContextDto } from '../../../../common/dto/request/get-context.dto';
import { IContext } from '../../../../common/interfaces/context.interface';
import { WorkspaceError } from '../../enum/workspace-error';
import { WORKSPACE_TITLE_MAX_LENGTH } from '../../consts/workspace-max-length';
import { IWorkspaceContext } from '../../interfaces/workspace-context.interface';
import { GetWorkspaceFieldsDto } from './get-workspace-fields.dto';

const isInDifferentWorkspace = (obj: IContext<IWorkspaceContext>) => ({
    id: { not: obj.context.workspace.id },
    deletedAt: null
})

export class UpdateWorkspaceDto extends IntersectionType(
    PartialType(GetWorkspaceFieldsDto),
    GetContextDto<IWorkspaceContext>
) {
    @ApiPropertyOptional()
    @IsOptional()
    @EntityExists('workspace', {
        failIfExists: true,
        message: WorkspaceError.URL_NAME_EXISTS,
        findArgs: ({ value, obj }) => ({
            where: { ...isInDifferentWorkspace(obj), urlName: value }
        })
    })
    @IsUrlName()
    urlName?: string

    @ApiPropertyOptional()
    @IsOptional()
    @EntityExists('workspace', {
        failIfExists: true,
        message: WorkspaceError.TITLE_EXISTS,
        findArgs: ({ value, obj }) => ({
            where: { ...isInDifferentWorkspace(obj), title: value }
        })
    })
    @MaxLength(WORKSPACE_TITLE_MAX_LENGTH)
    @IsNotEmptyString()
    title?: string
}
