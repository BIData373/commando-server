import { ExtractValue } from "./extract-value.type"

export type PredicateParams<
    TDto,
    TDtoField extends keyof TDto
> = {
    value: ExtractValue<TDto, TDtoField>
    obj: TDto
}