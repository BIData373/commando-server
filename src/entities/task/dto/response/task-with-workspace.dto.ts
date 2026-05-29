import { Exclude, Type } from "class-transformer";
import { ExposeProperty } from "../../../../common/decorators/expose-property.decorator";
import { WorkspaceDto } from "../../../workspace/dto/response/workspace.dto";
import { TaskDto } from "./task.dto";

@Exclude()
export class TaskWithWorkspaceDto extends TaskDto {
    @ExposeProperty()
    @Type(() => WorkspaceDto)
    workspace: WorkspaceDto
}