import { Exclude, Type } from "class-transformer";
import { ExposeProperty } from "../../../../common/decorators/expose-property.decorator";
import { TaskRowWithWorkspaceDto } from "../../../task/dto/response/task-row-with-workspace.dto";

@Exclude()
export class UserTaskArchive {
    @ExposeProperty({ type: TaskRowWithWorkspaceDto })
    @Type(() => TaskRowWithWorkspaceDto)
    task: TaskRowWithWorkspaceDto

    @ExposeProperty({ type: Date })
    @Type(() => Date)
    createdAt: Date
}