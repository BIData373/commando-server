import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsDate, IsEnum, IsOptional, IsString } from "class-validator";
import { IsNotEmptyString } from "../../../../common/decorators/is-not-empty-string.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { DeadlineType } from "../../../../types/prisma";
import { IUserContext } from "../../../user/interfaces/user-context.interface";

export class GetTaskFieldsDto extends GetContextDto<IUserContext> {
  @ApiProperty()
  @IsNotEmptyString()
  title: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
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
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ type: [String], required: false })
  @IsOptional()
  @IsArray()
  @IsNotEmptyString({ each: true })
  tags?: string[]
}
