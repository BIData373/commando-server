import { Exclude, Type } from "class-transformer";
import { ExposeProperty } from "../../../../common/decorators/expose-property.decorator";
import { WorkspaceWithPermissionDto } from "../../../workspace/dto/response/workspace-with-permission.dto";
import { TaskDto } from "./task.dto";

@Exclude()
export class TaskWithWorkspaceDto extends TaskDto {
    @ExposeProperty()
    @Type(() => WorkspaceWithPermissionDto)
    workspace: WorkspaceWithPermissionDto
}