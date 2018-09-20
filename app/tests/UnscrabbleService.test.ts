import { expect } from "chai";
import { UnscrabbleService } from "../typeScript/Services/UnscrabbleService";
import { StringService } from "../typeScript/Services/StringService";

describe("UnscrabbleService", () => {
    describe("Unscrabble", () => {
        it("Should return true when findThis = Sleep, inThis = Pseleedbnopos", () => {
            let stringService = new StringService(),
                unscrabbleService = new UnscrabbleService(stringService),
                result = unscrabbleService.Unscrabble("Sleep", "Pseleedbnopos");

            expect(result).to.equal(true);
        });
    });
    
});