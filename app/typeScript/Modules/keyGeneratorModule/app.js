export class KeyGeneratorModule {
    generate(field = "", limit = 25) {
        let result = typeof field !== "undefined"
            ? field.substring(0, limit).split(" ").join("")
            : "";
        return result;
    }
}
//# sourceMappingURL=app.js.map