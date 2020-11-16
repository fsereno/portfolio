export class KeyGeneratorModule {
    generate(field: string = "", limit = 25) : string {

        let result = typeof field !== "undefined"
            ? field.substring(0, limit).split(" ").join("")
            : "";

        return result;
    }
}