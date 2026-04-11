import { Allow } from "class-validator";
import { IContext } from "../../interfaces/context.interface";

export class GetContextDto<T> implements IContext<T> {
    @Allow()
    context: T;
}