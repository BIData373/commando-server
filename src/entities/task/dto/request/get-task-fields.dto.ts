import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsEnum, IsOptional, IsString } from "class-validator";
import { IsNotEmptyString } from "../../../../common/decorators/is-not-empty-string.decorator";
import { IsIdPermitted } from "../../../../common/decorators/is-permitted-id.decorator";
import { DeadlineType, PermissionType } from "../../../../types/prisma";

export class GetTaskFieldsDto {
    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty({ required: false })
    @IsBoolean()
    @IsOptional()
    flagged?: boolean;

    @ApiProperty({ enum: DeadlineType })
    @IsEnum(DeadlineType)
    deadlineType: DeadlineType;

    @ApiProperty({ required: false })
    @IsDate()
    @IsOptional()
    @Type(() => Date)
    issuedAt?: Date;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsDate()
    @Type(() => Date)
    dueDate?: Date;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    notes?: string;

    @ApiProperty({ type: [Number], required: false })
    @IsIdPermitted('assignee', PermissionType.VIEWER, {
        each: true,
        filterDeletedAt: true
    })
    assigneeIds?: number[]

    @ApiProperty({ type: [String], required: false })
    @IsNotEmptyString({ each: true })
    tags?: string[]
}
