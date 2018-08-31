
export interface ITextService  {

    Concat(a :string,b:string): string;
    FindReplace(findThis: string, inThis: string, replaceWithThis: string): string;
    ToArray(input: string) : string[];
    Unscrabble(findThis: string, inThis: string) : boolean;
    GetAlphaString() : string;
    GetNumericString() : string;
    GenerateRandom(criteria: string[], length:number) : string;
}