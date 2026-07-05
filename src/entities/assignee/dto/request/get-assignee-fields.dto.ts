import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsOptional, ValidateIf, ValidateNested } from "class-validator";
import { IsNotEmptyString } from "../../../../common/decorators/is-not-empty-string.decorator";
import { CreateUserDto } from "../../../user/dto/request/create-user.dto";

export class GetAssigneeFieldsDto {
    @ApiProperty()
    @IsNotEmptyString()
    name: string;

    @ApiProperty()
    @IsNotEmptyString()
    color: string;

    @ApiProperty({ type: String, required: false, nullable: true })
    @ValidateIf((o) => o.iconName)
    @IsOptional()
    @IsNotEmptyString()
    icon?: string;

    @ApiProperty({ type: String, required: false, nullable: true })
    @ValidateIf((o) => o.icon)
    @IsOptional()
    @IsNotEmptyString()
    iconName?: string;

    @ApiProperty({ type: [CreateUserDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateUserDto)
    users: CreateUserDto[]
}