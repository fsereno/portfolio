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

        let result = inThis.replace(findThis, replaceWithThis);
        
        return result;

    }
}