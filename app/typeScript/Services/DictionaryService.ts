import { IDictionaryService } from "../Interfaces/IDictionaryService";
import { IDictionaryRepository } from "../Interfaces/IDictionaryRepository";
import { DictionaryResultsModel } from "../Models/DictionaryResultsModel";

export class DictionaryService implements IDictionaryService
{   
    
    private dictionaryRepository: IDictionaryRepository;

    constructor(

        dictionaryRepository: IDictionaryRepository

    ){

        this.dictionaryRepository = dictionaryRepository;

    }

    Find (word: string): DictionaryResultsModel {

        let dictionary = this.dictionaryRepository.Get(),
            inputArray = word.split("");

            inputArray[0] = inputArray[0].toUpperCase();

            let inputToUse = inputArray.join(""),
                result = dictionary[inputToUse] !== undefined,
                description = result ? dictionary[inputToUse] : "No results found.",
                dictionaryResultsModel = new DictionaryResultsModel(result, description, inputToUse);

        return dictionaryResultsModel;
    }

}