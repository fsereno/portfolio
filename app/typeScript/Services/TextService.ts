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

    GetAlphaString() : string {

        // Get from repository
        var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return string;

    };

    GetNumericString() : string {

        // Get from repository
        var string = "0123456789";
        return string;

    };

    GenerateRandom(criteria: string[], length:number) : string {

        let output: string[] = []

        while(output.length < length) {

            criteria.forEach(criterion => {
            
                let array = this.stringToArray(criterion);
    
                array.forEach((char, i) => {
    
                    let indexToPush = Math.floor(Math.random() * array.length) + 1;
    
                    if(i===indexToPush){
                        output.push(char);
                    }
                    
                });
            });
        }

        let result = output.join("");

        return result;

    }
}