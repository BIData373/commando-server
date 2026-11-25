import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsOptional, ValidateIf, ValidateNested } from "class-validator";
import { IsNotEmptyString } from "../../../../common/decorators/is-not-empty-string.decorator";
import { CreateAssigneeUserDto } from "./create-assignee-user.dto";

export class GetAssigneeFieldsDto {
    @ApiProperty()
    @IsNotEmptyString()
    name: string;

    @ApiProperty()
    @IsNotEmptyString()
    color: string;

    @ApiProperty({ type: String, required: false, nullable: true })
    @IsOptional()
    @IsNotEmptyString()
    icon?: string;

    @ApiProperty({ type: String, required: false, nullable: true })
    @IsOptional()
    @IsNotEmptyString()
    iconName?: string;

    @ApiProperty({ type: Boolean, required: false })
    @IsOptional()
    @IsBoolean()
    statusEditable?: boolean;

    @ApiProperty({ type: [CreateAssigneeUserDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateAssigneeUserDto)
    users: CreateAssigneeUserDto[]
}