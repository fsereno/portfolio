import { expect } from "chai";
import { TextService } from "../typeScript/Services/TextService";

describe("TextService", () => {
    describe("Concat", () => {
        it("Should return Hello World when a = Hello and b = World", () => {
            let textService = new TextService();

            var result = textService.Concat("Hello","World");

            expect(result).to.equal("Hello World");
        });
    })
});