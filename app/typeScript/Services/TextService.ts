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
                count = (inThis.match(regex) || []).length,
                result = inThis.replace(findThis, replaceWithThis);

            for (let index = 0; index < count; index++) {
                result = result.replace(findThis, replaceWithThis);
            }
       
        return result;
    }
}