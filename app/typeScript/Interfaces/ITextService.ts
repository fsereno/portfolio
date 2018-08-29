
export interface ITextService  {

    Concat(a :string,b:string): string;
    FindReplace(findThis: string, inThis: string, replaceWithThis: string): string;
    stringToArray(input: string) : string[];
    Unscrabble(findThis: string, inThis: string) : boolean;
    Generate(length:number) : string;
}