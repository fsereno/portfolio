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

            let regex = new RegExp(findThis),
                inThisArray = inThis.split(" "),
                newWordArray: string[] = [];

            inThisArray.forEach(word => {
                
                if(regex.test(word)){

                    newWordArray.push(replaceWithThis)

                } else {

                    newWordArray.push(word);

                }

            });

            let result = newWordArray.join(" ");
        
        return result;
    }
}