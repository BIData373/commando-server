type ArrayElement<T> = T extends (infer U)[] ? U : T

type IsRecursable<T> = T extends Date | Function ? false : T extends object ? true : false

type Decrement = [never, 0, 1, 2, 3, 4]

// Dot-notation path into T (e.g. "tasks.assignees"), fanning out through arrays.
// Depth is capped to keep TS from blowing up on recursive/circular DTO graphs.
export type Path<T, Depth extends number = 5> = Depth extends never
  ? never
  : T extends object
  ? {
    [K in keyof T & string]: IsRecursable<ArrayElement<NonNullable<T[K]>>> extends true
    ? K | `${K}.${Path<ArrayElement<NonNullable<T[K]>>, Decrement[Depth]>}`
    : K
  }[keyof T & string]
  : never
