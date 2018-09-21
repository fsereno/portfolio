import { IStringService } from "../Interfaces/IStringService";
import { IUnscrabbleService } from "../Interfaces/IUnscrabbleService"
import { IDictionaryRepository } from "../Interfaces/IDictionaryRepository";

export class UnscrabbleService implements IUnscrabbleService
{
    private stringService: IStringService;
    private dictionaryRepository: IDictionaryRepository;

    constructor
    (
        stringService: IStringService,
        dictionaryRepository: IDictionaryRepository
        
    ){
        this.stringService = stringService,
        this.dictionaryRepository = dictionaryRepository;
    }

    public Unscrabble(
        findThis: string, 
        inThis: string) : boolean {

        let findThisNormalised = findThis.toUpperCase(),
            inThisNormalised = inThis.toUpperCase(),
            scrabbleArray = this.stringService.ToArray(inThisNormalised),
            inputArray = this.stringService.ToArray(findThisNormalised),
            resultsArray = [];

        for (var i = 0; i < inputArray.length; i++) {
            
            let inputCharacter = inputArray[i],
                indexOf = scrabbleArray.indexOf(inputCharacter);

            if (indexOf>-1){
                resultsArray.push(inputCharacter);
                scrabbleArray.splice(indexOf, 1);
            }
        }

        let resultArrayToString = resultsArray.join(""),
            result = resultArrayToString === findThisNormalised;

        return result;

    }

    unscrabbleAll(randomString: string) : string[] {

        const self = this;
        
        let result:string[] = [];

        let dictionary = self.dictionaryRepository.Get();

        Object.keys(dictionary).forEach((value, index) => {

            let eachResult = self.Unscrabble(value, randomString);

            if (eachResult) {

                result.push(value);

            }

        });

        return result;

    };

}