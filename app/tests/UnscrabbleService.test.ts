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
                resultCase1 = unscrabbleService.Unscrabble("Sleep", "Pseleedbnopos"),
                resultCase2 = unscrabbleService.Unscrabble("Xerox", "Pseleedbnopos");

            expect(resultCase1).to.equal(true);
            expect(resultCase2).to.equal(false);
        });
    });
    describe("UnscrabbleAll", () => {
        it("Should return an array of length 785 when randomString = ZWJAVAEGOOGLNTI", () => {
            let dictionaryRepository = new DictionaryRepository(),
                stringRepository = new StringRepository(),
                stringService = new StringService(stringRepository),
                unscrabbleService = new UnscrabbleService(stringService, dictionaryRepository),
                resultCase1 = unscrabbleService.unscrabbleAll("ZWJAVAEGOOGLNTI");
               
            expect(resultCase1.length).to.equal(785);
        });
    });
    
});