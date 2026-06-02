import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsEnum, IsOptional, IsString } from "class-validator";
import { IsNotEmptyString } from "../../../../common/decorators/is-not-empty-string.decorator";
import { IsIdPermitted } from "../../../../common/decorators/is-permitted-id.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { DeadlineType, PermissionType } from "../../../../types/prisma";
import { IUserContext } from "../../../user/interfaces/user-context.interface";

export class GetTaskFieldsDto extends GetContextDto<IUserContext> {
  @ApiProperty()
  @IsNotEmptyString()
  title: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  flagged?: boolean;

  @ApiProperty({ enumName: 'DeadlineType', enum: DeadlineType })
  @IsEnum(DeadlineType)
  deadlineType: DeadlineType;

  @ApiProperty({ type: Date, required: false, nullable: true })
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
  @IsOptional()
  assigneeIds?: number[]

  @ApiProperty({ type: [String], required: false })
  @IsNotEmptyString({ each: true })
  @IsOptional()
  tags?: string[]
}
