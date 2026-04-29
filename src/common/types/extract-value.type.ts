export type ExtractValue<TObject, TField extends keyof TObject> = TObject[TField] extends any[]
    ? TObject[TField][0]
    : TObject[TField]