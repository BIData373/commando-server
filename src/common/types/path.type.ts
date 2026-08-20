type ArrayElement<T> = T extends (infer U)[] ? U : T

type IsRecursable<T> = T extends Date | Function ? false : T extends object ? true : false

// Counts down from N without listing every value by hand, so raising Depth never grows this file.
type BuildTuple<N extends number, Acc extends unknown[] = []> =
  Acc['length'] extends N ? Acc : BuildTuple<N, [...Acc, unknown]>

// Prev<0> resolves to `never` (an empty tuple can't be split into [...Rest, unknown]) - that's what
// lets PathOf below use `Depth extends never` as its "stop recursing" base case.
type Prev<N extends number> = BuildTuple<N> extends [...infer Rest, unknown] ? Rest['length'] : never

// The path segment for property K: plain "K", or "K[]" when MarkArrays is on and T is an array - see WritePath.
type SegmentName<T, K extends string, MarkArrays extends boolean> =
  MarkArrays extends true ? (NonNullable<T> extends unknown[] ? `${K}[]` : K) : K

// Dot-notation path into T (e.g. "tasks.assignees"), fanning out through arrays.
// Depth is capped to keep TS from blowing up on recursive/circular DTO graphs.
type PathOf<T, MarkArrays extends boolean, Depth extends number> = Depth extends never
  ? never
  : T extends object
  ? {
    [K in keyof T & string]: IsRecursable<ArrayElement<NonNullable<T[K]>>> extends true
    ? SegmentName<T[K], K, MarkArrays> | `${SegmentName<T[K], K, MarkArrays>}.${PathOf<ArrayElement<NonNullable<T[K]>>, MarkArrays, Prev<Depth>>}`
    : SegmentName<T[K], K, MarkArrays>
  }[keyof T & string]
  : never

// Dot-notation path into T.
// e.g. Path<{ tasks: { assignees: string[] }[] }> = 'tasks' | 'tasks.assignees'
export type Path<T, Depth extends number = 12> = PathOf<T, false, Depth>

// Same as Path<T>, but every array-typed segment is marked with a `[]` suffix, so a path meant to be
// written into carries, at the type level, which segments are real arrays that must never be
// fabricated when missing.
// e.g. WritePath<{ tasks: { assignees: string[] }[] }> = 'tasks[]' | 'tasks[].assignees[]'
export type WritePath<T, Depth extends number = 12> = PathOf<T, true, Depth>
