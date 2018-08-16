import { ITextService } from "../Interfaces/ITextService";

export class TextService implements ITextService
{
    public Concat(a :string,b:string): string {
        return a + " " + b;
    }

    public FindReplace(
        findThis: string, 
        inThis: string, 
        replaceWithThis: string): string{

            let regex = new RegExp(findThis, "g"),
                count = (inThis.match(regex) || []).length;
                
            for (let index = 0; index < count; index++) {
                inThis = inThis.replace(findThis, replaceWithThis);
            }
       
        return inThis;
    }

    public stringToArray(input: string) : string[] {
        
        let result = [];
        
        for (var i = 0; i < input.length; i++) {
            result.push(input[i]);
        }

        return result;
    }

    public Unscrabble(
        findThis: string, 
        inThis: string) : boolean {

        /*
            To do this we will 
            1) First put the scrabble string into an array ?
            2) We then put the input string into an array
            3) We then iterate over the input array, 
                and for each iteration we will find the index of that
                character in the scrabble array. If it exists 
                store it in a new results array and remove that character from the
                scrabble array, so when we next iterate over the scrabble array we do not
                find the same character.
            4) Once we have iterated over all of the input array,
                we can join the new (result) array and compare it with the original
                string input. 
            5) If they match then we have been able to make the word, return true, if not return false. 

            Next try and create a scrabble generator.
        */

        let findThisNormalised = findThis.toLowerCase(),
            inThisNormalised = inThis.toLowerCase(),
            scrabbleArray = this.stringToArray(inThisNormalised),
            inputArray = this.stringToArray(findThisNormalised),
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