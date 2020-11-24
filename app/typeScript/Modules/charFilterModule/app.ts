export class CharFilterModule {

    filter(value: string, regex: RegExp) : string {

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