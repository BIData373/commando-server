import { Exclude, Type } from "class-transformer";
import { ExposeProperty } from "../../../../common/decorators/expose-property.decorator";
import { WorkspaceWithPermissionDto } from "../../../workspace/dto/response/workspace-with-permission.dto";
import { TaskRowDto } from "./task-row.dto";

@Exclude()
export class TaskRowWithWorkspaceDto extends TaskRowDto {
    @ExposeProperty({ type: WorkspaceWithPermissionDto })
    @Type(() => WorkspaceWithPermissionDto)
    workspace: WorkspaceWithPermissionDto
}