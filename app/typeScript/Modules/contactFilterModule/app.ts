export class ContactFilterModule {

    filterNonNumerics(value: string) : string {

        let regex = /[0-9]/;
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