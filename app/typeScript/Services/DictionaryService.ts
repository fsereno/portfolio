import { IDictionaryService } from "../Interfaces/IDictionaryService";
import { IDictionaryRepository } from "../Interfaces/IDictionaryRepository";

export class DictionaryService implements IDictionaryService
{   
    
    private dictionaryRepository: IDictionaryRepository;

    constructor(

        dictionaryRepository: IDictionaryRepository

    ){

        this.dictionaryRepository = dictionaryRepository;

    }

    Find (word: string): boolean {

        let dictionary = this.dictionaryRepository.Get(),
            inputArray = word.split("");

            inputArray[0] = inputArray[0].toUpperCase();

            let inputToUse = inputArray.join(""),
            result = dictionary[inputToUse] !== undefined;
            
        return result;
    }

}