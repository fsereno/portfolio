import { IDictionaryRepository } from "../Interfaces/IDictionaryRepository";

export class DictionaryRepository implements IDictionaryRepository {

    public dictionary: any;

    constructor(){

        this.dictionary = {

            "Excelled": "of Excel", 
            "Avowance": "Upholding; defense; vindication.", 

        };
    }

    Get(){

        return this.dictionary;

    };

}