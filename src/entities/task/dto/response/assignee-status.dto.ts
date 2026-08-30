import { Exclude, Type } from "class-transformer"
import { ExposeProperty } from "../../../../common/decorators/expose-property.decorator"
import { AssigneeDto } from "../../../assignee/dto/response/assignee.dto"
import { WorkspaceStatusDto } from "../../../workspace-status/dto/response/workspace-status.dto"

@Exclude()
export class AssigneeStatusDto {
    @ExposeProperty({ type: AssigneeDto })
    @Type(() => AssigneeDto)
    assignee: AssigneeDto

    @ExposeProperty({ type: WorkspaceStatusDto })
    @Type(() => WorkspaceStatusDto)
    status: WorkspaceStatusDto;

    @ExposeProperty()
    description: string

    @ExposeProperty({ type: Date, nullable: true })
    @Type(() => Date)
    archivedAt: Date | null

    @ExposeProperty()
    editable: boolean
}