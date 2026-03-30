import { Expose } from "class-transformer";
import { MetaFieldsDto } from "./meta-fields.dto";

export class IdMetaFieldsDto extends MetaFieldsDto {
    @Expose()
    id: number;
}