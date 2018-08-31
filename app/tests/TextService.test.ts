import { expect } from "chai";
import { TextService } from "../typeScript/Services/TextService";
import { stringLiteral } from "babel-types";

describe("TextService", () => {
    describe("Concat", () => {
        it("Should return Hello World when: a = Hello and b = World", () => {
            let textService = new TextService(),
                result = textService.Concat("Hello","World");

            expect(result).to.equal("Hello World");
        });
    });
    describe("FindReplace", () => {
        it("Should return Hello Tom, replaced with Tom. when findThis = World, inThis = Hello World, replaced with World. and replaceWithThis = Tom", () => {
            let textService = new TextService(),
                result = textService.FindReplace("World", "Hello World, replaced with World.", "Tom");

            expect(result).to.equal("Hello Tom, replaced with Tom.");
        });
    });
    describe("Unscrabble", () => {
        it("Should return true when findThis = Sleep, inThis = Pseleedbnopos", () => {
            let textService = new TextService(),
                result = textService.Unscrabble("Sleep", "Pseleedbnopos");

            expect(result).to.equal(true);
        });
    });
    describe("GenerateRandom", () => {
        it("Should return a random string of length 10, if criteria = string[] and length = 10", () => {
            let textService = new TextService(),
                alpha = textService.AlphaString,
                numeric = textService.NumericString,
                criteria = [alpha, numeric],
                result = textService.GenerateRandom(criteria, 10);

            expect(result).is.not.null;
            expect(result).is.string;
            expect(result.length).to.equal(10);
        });
    });
});