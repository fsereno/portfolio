import { expect } from "chai";
import { KeyGeneratorUtil } from "../../typeScript/Utils/keyGeneratorUtil/index";

describe("KeyGeneratorUtil", () => {
    describe("generate", () => {
        it("Should return same string, with no spaces.", () => {
            let result = KeyGeneratorUtil.generate("This is a test.");
            expect(result).to.equal("Thisisatest.");
        });
        it("Should return same string, with no spaces, if limit is larger than string length.", () => {
            let result = KeyGeneratorUtil.generate("This is a test.", 100);
            expect(result).to.equal("Thisisatest.");
        });
        it("Should return an empty string when nothing is passed.", () => {
            let result = KeyGeneratorUtil.generate();
            expect(result).to.equal("");
        });
        it("Should return an empty string when value is undefined.", () => {
            let result = KeyGeneratorUtil.generate(undefined);
            expect(result).to.equal("");
        });
    });
});