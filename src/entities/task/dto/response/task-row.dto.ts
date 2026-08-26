import { ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { AssigneeDto } from '../../../assignee/dto/response/assignee.dto';
import { WorkspaceStatusDto } from '../../../workspace-status/dto/response/workspace-status.dto';
import { AssigneeStatusDto } from './assignee-status.dto';
import { TaskFieldsDto } from './task-fields.dto';

@Exclude()
export class TaskRowDto extends TaskFieldsDto {
    @ExposeProperty()
    rowKey: string

    @Expose()
    @ApiPropertyOptional({ type: AssigneeDto })
    @Type(() => AssigneeDto)
    assignee?: AssigneeDto

    @ExposeProperty({ type: WorkspaceStatusDto })
    @Type(() => WorkspaceStatusDto)
    status: WorkspaceStatusDto

    @ExposeProperty({ type: [AssigneeStatusDto] })
    @Type(() => AssigneeStatusDto)
    otherAssignees: AssigneeStatusDto[]
}