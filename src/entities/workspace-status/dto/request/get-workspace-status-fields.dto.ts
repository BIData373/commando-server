import { IsNotEmptyString } from "../../../../common/decorators/is-not-empty-string.decorator";

export class GetWorkspaceStatusFieldsDto {
    @IsNotEmptyString()
    name: string;

    @IsNotEmptyString()
    color: string;

    // FIX Enum?
    @IsNotEmptyString()
    statusType: string;
}