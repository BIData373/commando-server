import { ApiProperty } from "@nestjs/swagger"
import { IsOptional, IsString } from "class-validator"
import { GetViewerAssigneeIdDto } from "../../../assignee/dto/request/get-assignee-id.dto"

export class GetTaskAssigneeDto extends GetViewerAssigneeIdDto {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    description?: string
}