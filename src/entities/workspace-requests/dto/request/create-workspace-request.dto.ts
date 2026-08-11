import { ApiProperty } from "@nestjs/swagger";
import { ArrayUnique, IsArray, IsNotEmpty, IsString } from "class-validator";
import { CreateWorkspaceDto } from "../../../workspace/dto/request/create-workspace.dto";

export class CreateWorkspaceRequestDto extends CreateWorkspaceDto {
    @ApiProperty({
        type: [String],
        description: "List of managers' emails for the workspace request",
    })
    @IsArray()
    @ArrayUnique()
    @IsNotEmpty()
    @IsString({ each: true })
    managers: string[];
}
