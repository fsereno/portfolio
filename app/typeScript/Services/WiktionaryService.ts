import { IWiktionaryService } from "../Interfaces/IWiktionaryService";

export class WiktionaryService implements IWiktionaryService
{
    
    public api: string;

    constructor(){

        this.api = "https://en.wiktionary.org/w/api.php?action=opensearch&search=";

    }

    async Find (word: string): Promise<string[]> {

        try {

            await $.ajax({
                url: this.api,
                data: word     
            }).done((data)=>{
    
                return data;

            });

        } catch(error) {
            return [""];
        }
        
    }
}