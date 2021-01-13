"use strict;"

import { IStringService } from "../Interfaces/IStringService";
import { IUnscrabbleService } from "../Interfaces/IUnscrabbleService"
import { IDictionaryRepository } from "../Interfaces/IDictionaryRepository";

export class UnscrabbleService implements IUnscrabbleService {
    private stringService: IStringService;
    private dictionaryRepository: IDictionaryRepository;

    constructor(stringService: IStringService, dictionaryRepository: IDictionaryRepository) {
        this.stringService = stringService,
        this.dictionaryRepository = dictionaryRepository;
    }

    public Unscrabble(findThis: string, inThis: string): boolean {
        let findThisNormalised = findThis.toUpperCase();
        let inThisNormalised = inThis.toUpperCase();
        let scrabbleArray = this.stringService.ToArray(inThisNormalised);
        let inputArray = this.stringService.ToArray(findThisNormalised);
        let resultsArray = [];
        let firstLetterExists = scrabbleArray.indexOf(inputArray[0]);
        let lastLetterExists = scrabbleArray.indexOf(inputArray[inputArray.length - 1]);
        let result = false;

        if (firstLetterExists > -1 && lastLetterExists > -1) {
            for (let i = 0; i < inputArray.length; i++) {
                let inputCharacter = inputArray[i];
                let indexOf = scrabbleArray.indexOf(inputCharacter);
                if (indexOf > -1) {
                    resultsArray.push(inputCharacter);
                    scrabbleArray.splice(indexOf, 1);
                }
            }
            let resultArrayToString = resultsArray.join("");
            result = resultArrayToString === findThisNormalised;
        }
        return result;
    }

    unscrabbleAll(randomString: string): string[] {
        const self = this;
        let result: string[] = [];
        let dictionary = self.dictionaryRepository.Get();
        Object.keys(dictionary).forEach((word, index) => {
            let eachResult = self.Unscrabble(word, randomString);
            if (eachResult) {
                result.push(word);
            }
        });

        return result;
    };

    winner(yourResults: string, unscrabblerResults: string): string {
        let yourResultsArray = yourResults.split(",");
        let unscrabblerResultsArray = unscrabblerResults.split(",");
        let result = yourResultsArray.length > unscrabblerResultsArray.length ? "You!" : "Unscrabbler!";
        return result;
    };
}