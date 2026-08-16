import { IntersectionType } from '@nestjs/swagger';
import { GetViewerWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';
import { GetFilterIsArchived } from '../../../user/dto/request/get-filter-is-arcived.dto';

export class ListTaskRowsQueryDto extends IntersectionType(GetViewerWorkspaceIdFieldDto, GetFilterIsArchived) { }
