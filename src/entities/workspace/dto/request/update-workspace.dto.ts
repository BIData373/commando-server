import { ApiPropertyOptional, IntersectionType, PartialType } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { EntityExists } from '../../../../common/decorators/entity-exists.decorator';
import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';
import { GetContextDto } from '../../../../common/dto/request/get-context.dto';
import { IContext } from '../../../../common/interfaces/context.interface';
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
    @IsNotEmptyString()
    @EntityExists('workspace', {
        failIfExists: true,
        findArgs: ({ value, obj }) => ({
            where: { ...isInDifferentWorkspace(obj), urlName: value }
        })
    })
    urlName?: string

    @ApiPropertyOptional()
    @IsOptional()
    @IsNotEmptyString()
    @EntityExists('workspace', {
        failIfExists: true,
        findArgs: ({ value, obj }) => ({
            where: { ...isInDifferentWorkspace(obj), title: value }
        })
    })
    title?: string
}
