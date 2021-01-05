
export class FilterModule {

    public static filterInputOnRegex(input: string, regex: RegExp) : string {

        let result = "";

        for (let i = 0; i < input.length; i++) {

            let test = regex.test(input[i]);

            if (test) {
                result = result += input[i];
            }
        }

        return result;
    }

    public static isUniqueInArray(collection: string[], input: string): boolean {
        let result = collection?.filter(x => x === input).length === 0 ?? true;
        return result;
    }
}