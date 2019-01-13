
export interface IRandomGeneratorService  {
    Alphas: string;
    Numerics: string;
    Constonants: string;
    Vowels: string;
    GenerateRandomString(criteria: string[], length:number) : string;
    Generate(target:number): number;
}