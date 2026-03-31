import { Type } from "class-transformer";
import { EntityExists } from "../../../../common/decorators/entity-exists.decorator";
import { IsPositiveInt } from "../../../../common/decorators/is-positive-int.decorator";

export class DeletePermissionDto {
    @Type(() => Number)
    @EntityExists('user')
    @IsPositiveInt()
    userId: number;

    @Type(() => Number)
    @EntityExists('workspace')
    @IsPositiveInt()
    workspaceId: number;
}