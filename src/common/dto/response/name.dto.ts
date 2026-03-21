import { Exclude, Expose } from "class-transformer";

@Exclude()
export class NameDto {
    @Expose()
    name: string
}