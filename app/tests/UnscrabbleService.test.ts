import { expect } from "chai";

// Services
import { UnscrabbleService } from "../typeScript/Services/UnscrabbleService";
import { StringService } from "../typeScript/Services/StringService";

// Repositories
import { StringRepository } from "../typeScript/Repositories/StringRepository";
import { DictionaryRepository } from "../typeScript/Repositories/DictionaryRepository";

describe("UnscrabbleService", () => {
    describe("Unscrabble", () => {
        it("Should return true when findThis = Sleep, inThis = Pseleedbnopos", () => {
            let dictionaryRepository = new DictionaryRepository(),
                stringRepository = new StringRepository(),
                stringService = new StringService(stringRepository),
                unscrabbleService = new UnscrabbleService(stringService, dictionaryRepository),
                result = unscrabbleService.Unscrabble("Sleep", "Pseleedbnopos");

            expect(result).to.equal(true);
        });
    });
    
});