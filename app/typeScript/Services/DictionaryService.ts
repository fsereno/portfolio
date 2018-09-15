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
            result = dictionary[word].length > 0;

        return result;
    }

}