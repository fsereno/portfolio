import { expect } from "chai";
import { KeyGeneratorModule } from "../../typeScript/Modules/keyGeneratorModule/app";

describe("KeyGeneratorModule", () => {
    describe("generate", () => {
        it("Should return same string, with no spaces.", () => {
            let result = KeyGeneratorModule.generate("This is a test.");
            expect(result).to.equal("Thisisatest.");
        });
        it("Should return same string, with no spaces, if limit is larger than string length.", () => {
            let result = KeyGeneratorModule.generate("This is a test.", 100);
            expect(result).to.equal("Thisisatest.");
        });
        it("Should return an empty string when nothing is passed.", () => {
            let result = KeyGeneratorModule.generate();
            expect(result).to.equal("");
        });
        it("Should return an empty string when value is undefined.", () => {
            let result = KeyGeneratorModule.generate(undefined);
            expect(result).to.equal("");
        });
    });
});