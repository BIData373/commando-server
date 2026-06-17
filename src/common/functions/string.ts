import { inspect } from "node:util";

export function stringifyObject(obj?: object) {
    return obj
        ? inspect(obj, { depth: null, compact: true, breakLength: Infinity })
        : undefined
}

export function decodeMulterFilename(originalname: string): string {
    return Buffer.from(originalname, 'latin1').toString('utf8');
}