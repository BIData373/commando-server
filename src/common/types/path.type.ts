type ArrayElement<T> = T extends (infer U)[] ? U : T

type IsRecursable<T> = T extends Date | Function ? false : T extends object ? true : false

// Counts down from N without listing every value by hand, so raising Depth never grows this file.
type BuildTuple<N extends number, Acc extends unknown[] = []> =
  Acc['length'] extends N ? Acc : BuildTuple<N, [...Acc, unknown]>
  
type Prev<N extends number> = BuildTuple<N> extends [...infer Rest, unknown] ? Rest['length'] : never

// The path segment for property K: plain "K", or "K[]" when Marked and T is an array - see WritePath.
type SegmentName<T, K extends string, Marked extends boolean> =
  Marked extends true ? (NonNullable<T> extends unknown[] ? `${K}[]` : K) : K

// Dot-notation path into T (e.g. "tasks.assignees"), fanning out through arrays.
// Depth is capped to keep TS from blowing up on recursive/circular DTO graphs.
type PathOf<T, Marked extends boolean, Depth extends number> = Depth extends never
  ? never
  : T extends object
  ? {
    [K in keyof T & string]: IsRecursable<ArrayElement<NonNullable<T[K]>>> extends true
    ? SegmentName<T[K], K, Marked> | `${SegmentName<T[K], K, Marked>}.${PathOf<ArrayElement<NonNullable<T[K]>>, Marked, Prev<Depth>>}`
    : SegmentName<T[K], K, Marked>
  }[keyof T & string]
  : never

export type Path<T, Depth extends number = 12> = PathOf<T, false, Depth>

// Same as Path<T>, but every array-typed segment is marked with a `[]` suffix (e.g.
// "tasks[].assignees[].context"), so a path meant to be written into carries, at the type level,
// which segments are real arrays that must never be fabricated when missing.
export type WritePath<T, Depth extends number = 12> = PathOf<T, true, Depth>
