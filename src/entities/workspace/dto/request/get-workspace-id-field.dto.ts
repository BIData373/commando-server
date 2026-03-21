import { EntityExists } from "../../../../common/decorators/entity-exists.decorator";
import { IsPositiveInt } from "../../../../common/decorators/is-positive-int.decorator";

export class GetWorkspaceIdFieldDto {
    @IsPositiveInt()
    @EntityExists('workspace')
    workspaceId: number
}