import { expect } from "chai";
import { DictionaryService } from "../typeScript/Services/DictionaryService";
import { DictionaryRepository } from "../typeScript/Repositories/DictionaryRepository";

describe("DictionaryService", () => {
    describe("Find", () => {
        it("Should return 'true' when: word = 'Avowance', Should return 'false' when: word = 'sdfsdfsd'", () => {
            let dictionaryRepository = new DictionaryRepository(),
                dictionaryService = new DictionaryService(dictionaryRepository),
                dictionaryResultsModelCase1 = dictionaryService.Find("avowance"),
                dictionaryResultsModelCase2 = dictionaryService.Find("sdfsdfsd");

            expect(dictionaryResultsModelCase1.result).to.be.equal(true);
            expect(dictionaryResultsModelCase2.result).to.be.equal(false);
            expect(dictionaryResultsModelCase2.description).to.be.equal("No results found.");
        });
    });
});