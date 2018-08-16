
export interface ITextService  {

    Concat(a :string,b:string): string;
    FindReplace(findThis: string, inThis: string, replaceWithThis: string): string;
    Unscrabble(findThis: string, inThis: string) : boolean;
}