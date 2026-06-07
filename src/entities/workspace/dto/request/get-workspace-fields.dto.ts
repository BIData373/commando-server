import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsOptional, IsString } from "class-validator";
import { IdExists } from "../../../../common/decorators/id-exists.decorator";

export class GetWorkspaceFieldsDto {
    @ApiProperty({ type: String, nullable: true, required: false })
    @IsOptional()
    @IsString()
    icon?: string | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsBoolean()
    assigneeStatusEditable?: boolean;

    @ApiProperty()
    @IdExists('pikud', { filterDeletedAt: true })
    pikudId: number;
}