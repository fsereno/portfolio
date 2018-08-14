import { expect } from "chai";
import { TextService } from "../typeScript/Services/TextService";

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
});