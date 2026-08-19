import { ApiProperty } from "@nestjs/swagger";
import { ArrayUnique, IsArray } from "class-validator";
import { IsNotEmptyString } from "../../../../common/decorators/is-not-empty-string.decorator";
import { CreateWorkspaceDto } from "../../../workspace/dto/request/create-workspace.dto";

export class CreateWorkspaceRequestDto extends CreateWorkspaceDto {
    @ApiProperty({
        type: [String],
        description: "List of managers' emails for the workspace request",
    })
    @IsArray()
    @ArrayUnique()
    @IsNotEmptyString({ each: true })
    managers: string[];
}
