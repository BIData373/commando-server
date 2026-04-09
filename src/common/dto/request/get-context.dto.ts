import { Exclude, Expose } from "class-transformer";
import { IContext } from "../../interfaces/context.interface";

@Exclude()
export class GetContextDto<T> implements IContext<T> {
    @Expose()
    context: T;
}