import { inspect } from "node:util";

export function stringifyObject(obj?: object) {
    return obj
        ? inspect(obj, { depth: null, compact: true, breakLength: Infinity })
        : undefined
}