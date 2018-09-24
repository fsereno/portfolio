import { IDictionaryService } from "../Interfaces/IDictionaryService";
import { IDictionaryRepository } from "../Interfaces/IDictionaryRepository";
import { DictionaryResultModel } from "../Models/DictionaryResultModel";

export class DictionaryService implements IDictionaryService
{   
    
    private dictionaryRepository: IDictionaryRepository;

    constructor(

        dictionaryRepository: IDictionaryRepository

    ){

        this.dictionaryRepository = dictionaryRepository;

    }

    Find (word: string): DictionaryResultModel {

        let dictionary = this.dictionaryRepository.Get(),
            inputArray = word.split("");

            inputArray[0] = inputArray[0].toUpperCase();

            for (let index = 1; index < inputArray.length; index++) {
                inputArray[index] = inputArray[index].toLowerCase();
            }

            let inputToUse = inputArray.join(""),
                result = dictionary[inputToUse] !== undefined,
                description = result ? dictionary[inputToUse] : "No results found.",
                dictionaryResultsModel = new DictionaryResultModel(result, description, inputToUse);

        return dictionaryResultsModel;
    }

}