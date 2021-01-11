"use strict;";
export class FilterUtil {
    static isUniqueInArray(collection, input) {
        var _a;
        let result = (_a = (collection === null || collection === void 0 ? void 0 : collection.filter(x => x === input).length) === 0) !== null && _a !== void 0 ? _a : true;
        return result;
    }
}
//# sourceMappingURL=index.js.map