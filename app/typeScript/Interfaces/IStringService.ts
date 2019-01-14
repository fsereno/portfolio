import { IStringRepository } from "./IStringRepository";

export interface IStringService  {
    stringRepository: IStringRepository;
    Alphas: string;
    Numerics: string;
    Constonants: string;
    Vowels: string;
    Concat(a :string,b:string): string;
    FindReplace(findThis: string, inThis: string, replaceWithThis: string): string;
    ToArray(input: string) : string[];
}