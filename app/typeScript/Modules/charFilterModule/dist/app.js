export class CharFilterModule {
    filter(value, regex) {
        let result = "";
        for (let i = 0; i < value.length; i++) {
            let test = regex.test(value[i]);
            if (test) {
                result = result += value[i];
            }
        }
        return result;
    }
}
//# sourceMappingURL=app.js.map