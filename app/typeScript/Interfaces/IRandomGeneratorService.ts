
export interface IRandomGeneratorService  {
    Alphas: string;
    Numerics: string;
    Constonants: string;
    Vowels: string;
    GenerateRandom(criteria: string[], length:number) : string;
}