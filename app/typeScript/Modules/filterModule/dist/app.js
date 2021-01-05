export class FilterModule {
    static filterInputOnRegex(input, regex) {
        let result = "";
        for (let i = 0; i < input.length; i++) {
            let test = regex.test(input[i]);
            if (test) {
                result = result += input[i];
            }
        }
        return result;
    }
    static isUniqueInArray(collection, input) {
        var _a;
        let result = (_a = (collection === null || collection === void 0 ? void 0 : collection.filter(x => x === input).length) === 0) !== null && _a !== void 0 ? _a : true;
        return result;
    }
}
//# sourceMappingURL=app.js.map