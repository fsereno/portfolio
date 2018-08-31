
export interface IStringService  {

    AlphaString: string;
    NumericString: string;
    Concat(a :string,b:string): string;
    FindReplace(findThis: string, inThis: string, replaceWithThis: string): string;
    ToArray(input: string) : string[];
    Unscrabble(findThis: string, inThis: string) : boolean;
    GenerateRandom(criteria: string[], length:number) : string;
    
}