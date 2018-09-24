import { expect } from "chai";
import { StringService } from "../typeScript/Services/StringService";

describe("StringService", () => {
    describe("Concat", () => {
        it("Should return Hello World when: a = Hello and b = World", () => {
            // Repositories
            let stringService = new StringService(),
                result = stringService.Concat("Hello","World");
            expect(result).to.equal("Hello World");
        });
    });
    describe("FindReplace", () => {
        it("Should return 'Find this word in this sentence and replace it with this word. Try finding - 'this'..when findThis = this, inThis = Find a word in this sentence and replace it with a word. Try finding - 'a'", () => {
            let stringService = new StringService(),
                result = stringService.FindReplace("a", "Find a word in this sentence and replace it with a word. Try finding - 'a'", "this");

            expect(result).to.equal("Find this word in this sentence and replace it with this word. Try finding - 'this'");
        });
    });
});