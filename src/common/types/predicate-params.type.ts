import { ExtractValue } from "./extract-value.type"

export type PredicateParams<
    TDto,
    TDtoField extends keyof TDto,
    TDtoValue extends ExtractValue<TDto, TDtoField>
> = {
    value: TDtoValue
    obj: TDto
}