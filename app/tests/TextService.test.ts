import { expect } from "chai";
import { TextService } from "../typeScript/Services/TextService";

describe("TextService", () => {
    describe("Concat", () => {
        it("Should return Hello World when: a = Hello and b = World", () => {
            let textService = new TextService();
            let result = textService.Concat("Hello","World");

            expect(result).to.equal("Hello World");
        });
    });
    describe("FindReplace", () => {
        it("Should return Hello Tom! when findThis = world, inThis = Hello World and replaceWithThis = Tom", () => {
            let textService = new TextService();
            let result = textService.FindReplace("World", "Hello World!", "Tom");

            expect(result).to.equal("Hello Tom!");
        });
    })
});