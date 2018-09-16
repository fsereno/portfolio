import { expect } from "chai";
import { DictionaryService } from "../typeScript/Services/DictionaryService";
import { DictionaryRepository } from "../typeScript/Repositories/DictionaryRepository";

describe("DictionaryService", () => {
    describe("Find", () => {
        it("Should return 'true' when: word = 'Avowance'", () => {
            let dictionaryRepository = new DictionaryRepository(),
                dictionaryService = new DictionaryService(dictionaryRepository),
                dictionaryResultsModel = dictionaryService.Find("avowance");

            expect(dictionaryResultsModel.result).to.be.equal(true);
        });
    });
});