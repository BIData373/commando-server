import { Allow } from "class-validator";
import { IContext, IPartialContext } from "../../interfaces/context.interface";

export class GetContextDto<T> implements IContext<T> {
    @Allow()
    context: T;
}

export class GetPartialContextDto<T> implements IPartialContext<T> {
    @Allow()
    context: Partial<T>;
}