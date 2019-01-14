import { expect } from "chai";
import { StringService } from "../../typeScript/Services/StringService";
import { StringRepository } from "../../typeScript/Repositories/StringRepository";

describe("StringService", () => {
    describe("Concat", () => {
        it("Should return Hello World when: a = Hello and b = World", () => {
            // Repositories
            let stringRepository = new StringRepository(),
                stringService = new StringService(stringRepository),
                result = stringService.Concat("Hello","World");
            expect(result).to.equal("Hello World");
        });
    });
    describe("FindReplace", () => {
        it("Should return 'Find this word in this sentence and replace it with this word. Try finding - 'this'..when findThis = this, inThis = Find a word in this sentence and replace it with a word. Try finding - 'a'", () => {
            let stringRepository = new StringRepository(),
                stringService = new StringService(stringRepository),
                result = stringService.FindReplace("a", "Find a word in this sentence and replace it with a word. Try finding - 'a'", "this");
            expect(result).to.equal("Find this word in this sentence and replace it with this word. Try finding - 'this'");
        });
    });
});