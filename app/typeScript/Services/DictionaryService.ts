"use strict;"

import { IDictionaryService } from "../Interfaces/IDictionaryService";
import { IDictionaryRepository } from "../Interfaces/IDictionaryRepository";
import { DictionaryResultModel } from "../Models/DictionaryResultModel";

export class DictionaryService implements IDictionaryService {

    private dictionaryRepository: IDictionaryRepository;

    constructor(dictionaryRepository: IDictionaryRepository) {
        this.dictionaryRepository = dictionaryRepository;
    }

    Find(word: string): DictionaryResultModel {

        let dictionary = this.dictionaryRepository.Get();
        let inputArray = word.split("");

        inputArray[0] = inputArray[0].toUpperCase();

        for (let index = 1; index < inputArray.length; index++) {
            inputArray[index] = inputArray[index].toLowerCase();
        }

        let inputToUse = inputArray.join("");
        let result = dictionary[inputToUse] !== undefined;
        let description = result ? dictionary[inputToUse] : "No results found.";
        let dictionaryResultsModel = new DictionaryResultModel(result, description, inputToUse);

        return dictionaryResultsModel;
    }
}