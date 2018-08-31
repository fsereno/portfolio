import { ITextService } from "../Interfaces/ITextService";

export class TextService implements ITextService
{
    public AlphaString: string;
    public NumericString: string;

    constructor(){

        this.AlphaString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.NumericString = "0123456789";

    }
    
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

    public ToArray(input: string) : string[] {
        
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
            scrabbleArray = this.ToArray(inThisNormalised),
            inputArray = this.ToArray(findThisNormalised),
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

    GenerateRandom(criteria: string[], length:number) : string {

        let output: string[] = []

        while(output.length < length) {

            criteria.forEach(criterion => {
            
                let array = this.ToArray(criterion);
    
                array.forEach((char, i) => {
    
                    let indexToPush = Math.floor(Math.random() * array.length);
    
                    if(i===indexToPush && output.length < length){
                        output.push(char);
                    }

                });
            });
        }

        let result = output.join("");

        return result;

    }
}