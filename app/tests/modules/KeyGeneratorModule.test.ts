import { expect } from "chai";
import { KeyGeneratorModule } from "../../typeScript/Modules/keyGeneratorModule/app";

let sut:KeyGeneratorModule = null;

describe("StringSearchModule", () => {
    beforeEach( () => sut = new KeyGeneratorModule());
    describe("generate", () => {
        it("Should return same string, with no spaces.", () => {
            let result = sut.generate("This is a test.");
            expect(result).to.equal("Thisisatest.");
        });
        it("Should return same string, with no spaces, if limit is larger than string length.", () => {
            let result = sut.generate("This is a test.", 100);
            expect(result).to.equal("Thisisatest.");
        });
        it("Should return an empty string when nothing is passed.", () => {
            let result = sut.generate();
            expect(result).to.equal("");
        });
        it("Should return an empty string when value is undefined.", () => {
            let result = sut.generate(undefined);
            expect(result).to.equal("");
        });
    });
});