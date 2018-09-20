import { IStringService } from "../Interfaces/IStringService";

export class StringService implements IStringService
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
            let searchRegex = new RegExp(findThis, "g"),
                replaceRegex = new RegExp("\\b" + findThis + "\\b"),
                count = (inThis.match(searchRegex) || []).length;

            for (let index = 0; index < count; index++) {
                inThis = inThis.replace(replaceRegex, replaceWithThis);
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