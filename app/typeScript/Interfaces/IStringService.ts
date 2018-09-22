
export interface IStringService  {
    AlphaString: string;
    NumericString: string;
    Constonants: string;
    Vowels: string;
    Concat(a :string,b:string): string;
    FindReplace(findThis: string, inThis: string, replaceWithThis: string): string;
    ToArray(input: string) : string[];
    GenerateRandom(criteria: string[], length:number) : string;
}