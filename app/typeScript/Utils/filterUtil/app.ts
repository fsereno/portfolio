"use strict;"

export class FilterUtil {

    public static isUniqueInArray(collection: string[], input: string): boolean {
        let result = collection?.filter(x => x === input).length === 0 ?? true;
        return result;
    }
}