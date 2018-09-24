
export interface IStringService  {
    Concat(a :string,b:string): string;
    FindReplace(findThis: string, inThis: string, replaceWithThis: string): string;
    ToArray(input: string) : string[];
}