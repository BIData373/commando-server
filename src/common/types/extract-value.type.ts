type UnwrapIfArray<T> = T extends any[] ? T[0] : T;
export type ExtractValue<TObject, TField extends keyof TObject> = UnwrapIfArray<TObject[TField]>