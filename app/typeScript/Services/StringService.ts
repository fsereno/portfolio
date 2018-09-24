import { IStringService } from "../Interfaces/IStringService";

export class StringService implements IStringService
{

    constructor(){}
    
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

}