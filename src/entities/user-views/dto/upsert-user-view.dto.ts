
import {
    IsInt,
    IsNotEmptyObject,
    IsObject,
    IsOptional,
} from 'class-validator';

export class UpsertUserViewsDto {

    @IsInt()
    @IsOptional()
    workspaceId: number | null;

    @IsObject()
    @IsNotEmptyObject()
    view: Record<string, unknown>;
}