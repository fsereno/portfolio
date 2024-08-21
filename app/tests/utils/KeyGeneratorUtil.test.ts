import { KeyGeneratorUtil } from "../../typeScript/Utils/keyGeneratorUtil/index";

describe("KeyGeneratorUtil", () => {
    describe("generate", () => {
        test("Should return same string, with no spaces.", () => {
            let result = KeyGeneratorUtil.generate("This is a test.");
            expect(result).toBe("Thisisatest.");
        });
        test("Should return same string, with no spaces, if limit is larger than string length.", () => {
            let result = KeyGeneratorUtil.generate("This is a test.", 100);
            expect(result).toBe("Thisisatest.");
        });
        test("Should return an empty string when nothing is passed.", () => {
            let result = KeyGeneratorUtil.generate();
            expect(result).toBe("");
        });
        test("Should return an empty string when value is undefined.", () => {
            let result = KeyGeneratorUtil.generate(undefined);
            expect(result).toBe("");
        });
    });
});