import { IsString } from "class-validator";

export class GetContentDto {
    @IsString()
    content: string
}