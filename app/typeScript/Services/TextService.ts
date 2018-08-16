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
}