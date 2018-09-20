import { IStringService } from "../Interfaces/IStringService";
import { IUnscrabbleService } from "../Interfaces/IUnscrabbleService"

export class UnscrabbleService implements IUnscrabbleService
{
    stringService: IStringService;

    constructor
    (
        stringService: IStringService
    ){
        this.stringService = stringService;
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

}